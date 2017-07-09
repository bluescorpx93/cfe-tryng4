import { Component } from '@angular/core';
import { Router} from '@angular/router';

@Component({
	selector: 'home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent{
	constructor(private router: Router){}

	// first put event: any, and based on the console.log find which event it is.
	// image.attr doesn't work

	homeImageList = [
		{
			imageSrc:"assets/images/4.jpg", title: "The 5 ways to type faster", link: "/videos/video-1"
		},
		{
			imageSrc:"assets/images/5.jpg", title: "Famous Volcanoes", link: "/videos/video-2"
		},
		{
			imageSrc:"assets/images/6.jpg", title: "Bikes under $1000", link: "/videos/video-3"
		}
		
	]

	preventNormal(event: MouseEvent, image: any){
		if (!image.prevented){
			console.log(event + " " + image.getAttribute("href"));
			event.preventDefault();
			// image.setAttribute("href","/videos");
			// image.link
			//image.prevented = true;
			//this.router.navigate('/videos');

		}
	}
}