import { Component, OnInit, OnDestroy } from '@angular/core';
import { Http } from '@angular/http';
import { VideoService} from '../video.service';
import { VideoItem } from '../video';

@Component({
	selector: 'video-list',
	templateUrl: './video-list.component.html',
	styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit, OnDestroy {
	private req:any
	title = "Video List"
	todayDate;
	videoList: [VideoItem];

	// videoList = [
	// 	{
	// 		name: "Video1",
	// 		slug: "video-1",
	// 		embed: '6wD4V0rvlDI'
	// 	},
	// 	{
	// 		name: "Video2",
	// 		slug: "video-2",
	// 		embed: '6wD4V0rvlDI'
	// 	},
	// 	{
	// 		name: "Video3",
	// 		slug: "video-3",
	// 		embed: null
	// 	}
	// ]

	constructor(private http: Http, private videoService: VideoService) { }

	ngOnInit() {
		this.todayDate = new Date()
		this.req = this.videoService.getAllVideos().subscribe(data=> {
			this.videoList = data as [VideoItem];
		})
		// this.req = this.http.get('assets/json/videos.json').subscribe(data => { console.log(data.json());
		// 	this.videoList = data.json() as any;
		// })
	}

	getEmbedURL(embed){
		return 'http://www.youtube.com/embed/'+embed
	}

	ngOnDestroy(){
		this.req.unsubscribe();
	}

}
