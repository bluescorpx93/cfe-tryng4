import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router} from '@angular/router';
import { Http } from '@angular/http';
import { VideoItem } from './video';
import { VideoService } from './video.service';

@Component({
	selector: 'home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
	constructor(private router: Router, private http: Http, private videoService: VideoService){}

	private req: any;
	// first put event: any, and based on the console.log find which event it is.
	// image.attr doesn't work

	homeImageList = [
		// {
		// 	imageSrc:"assets/images/4.jpg", title: "The 5 ways to type faster", link: "/videos/video-1"
		// },
		// {
		// 	imageSrc:"assets/images/5.jpg", title: "Famous Volcanoes", link: "/videos/video-2"
		// },
		// {
		// 	imageSrc:"assets/images/6.jpg", title: "Bikes under $1000", link: "/videos/video-3"
		// }
	]

	preventNormal(event: MouseEvent, image: any){
		if (!image.prevented){
			console.log(event + " " + image.getAttribute("href"));
			event.preventDefault();
			// image.setAttribute("href","/videos");
			// image.link
			//image.prevented = true;
			this.router.navigate(['/videos']);

		}
	}

	ngOnInit(){
		// this.req = this.http.get('assets/json/videos.json').subscribe(data => {
		// 	this.homeImageList = data.json() as [any];
		// })
		this.req = this.videoService.getAllVideos().subscribe(data => {
			this.homeImageList = data as [VideoItem];
		})
	}

	ngOnDestroy(){
		this.req.unsubscribe();
	}
}