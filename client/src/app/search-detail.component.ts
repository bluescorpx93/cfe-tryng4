import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Http } from '@angular/http';

@Component({
	selector: 'search-detail',
	templateUrl: './search-detail.component.html',
	styleUrls: ['./search-detail.component.css']
})

export class SearchDetailComponent implements OnInit, OnDestroy{
	private routeSub: any;
	query: string;
	searchResults: [any];
	constructor(private route: ActivatedRoute, private http: Http) {}

	ngOnInit(){
		this.routeSub = this.route.params.subscribe(params => {
			console.log(params);
			this.query = params['query']
			this.http.get('assets/json/videos.json').subscribe(data => {
				this.searchResults = data.json() as any;
			})
		})
	}
	

	ngOnDestroy(){
		this.routeSub.unsubscribe();
	}
}