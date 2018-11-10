import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

const endpoint = 'assets/json/videos.json';

@Injectable()
export class VideoService{
	constructor(private http: Http) {}
	
	getAllVideos(){
		return this.http.get(endpoint).map(response=> response.json()).catch(this.handleError);
	}

	getVideoBySlug(slug){
		return this.http.get(endpoint).map(response => {
			let data= response.json().filter(item => {
				if (item.slug == slug){
					return item
				}
			})
			if (data.length == 1){
				return data[0]
			}
			return {}
		}).catch(this.handleError)
	}

	searchVideoByName(name){
		return this.http.get(endpoint).map(response => {
			let data = []
			let req= response.json().filter(item => {
				if (item.name.indexOf(name) >=0){
					data.push(item);
				}
			})
			return data
		}).catch(this.handleError)
	}

	private handleError(error:any, caught:any): any{
		console.log("Error\n"+ error, "Caught\n"+caught);
	}
}