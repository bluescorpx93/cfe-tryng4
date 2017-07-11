import { VideoService} from '../video.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Http } from '@angular/http';
import { VideoItem } from '../video';

@Component({
	selector: 'video-detail',
	templateUrl: './video-detail.component.html',
	styleUrls: ['./video-detail.component.css']
})
export class VideoDetailComponent implements OnInit {
	private routeSub: any;
	private req: any;
	slug: string;
	video: VideoItem;

	constructor(private route: ActivatedRoute, private http: Http, private videoService: VideoService) { }

	ngOnInit() {
		this.routeSub = this.route.params.subscribe(params => {
			this.slug=params['slug']
			// this.http.get('assets/json/videos.json').subscribe(data => {
			// 	data.json().filter(item=>{
			// 		if (item.slug == this.slug){
			// 			console.log(item);
			// 			this.video = item;
			// 		}
			// 	})
			// })
			
			// -->	NOTE: Using same method from service
			// this.req = this.videoService.getAllVideos().subscribe(data => {
			// 	data.filter(item=> {
			// 		if (item.slug == this.slug){
			// 			this.video = item;
			// 		}
			// 	})
			// })

			// 	--> NOTE: Using getSingle method from service
			this.req = this.videoService.getVideoBySlug(this.slug).subscribe(data => {
				this.video = data;
			})

		})
	}

	ngOnDestroy(){
		this.routeSub.unsubscribe();
		this.req.unsubscribe();
	}

	getEmbedURL(embed){
		return 'http://www.youtube.com/embed/'+embed
	}

}
