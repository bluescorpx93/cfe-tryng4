import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Http } from '@angular/http';
import { VideoService} from './video.service';
import { VideoItem } from './video';

@Component({
	selector: 'search-detail',
	templateUrl: './search-detail.component.html',
	styleUrls: ['./search-detail.component.css']
})

export class SearchDetailComponent implements OnInit, OnDestroy{
	private routeSub: any;
	private req: any;
	query: string;
	searchResults: [VideoItem];
	searchResultsv2: [VideoItem];

	constructor(private route: ActivatedRoute, private http: Http, private videoService: VideoService) {}

	ngOnInit(){
		this.routeSub = this.route.params.subscribe(params => {
			console.log(params);
			this.query = params['query']
			this.http.get('assets/json/videos.json').subscribe(data => {
				this.searchResults = data.json() as [VideoItem];
			})
			this.req = this.videoService.searchVideoByName(this.query).subscribe(data => {
				this.searchResultsv2 = data as [VideoItem];
			})
		})
	}
	

	ngOnDestroy(){
		this.routeSub.unsubscribe();
	}
}