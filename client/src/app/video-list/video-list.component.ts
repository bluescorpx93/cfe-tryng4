import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
	selector: 'video-list',
	templateUrl: './video-list.component.html',
	styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {
	title = "Video List"
	videoList = [
		{
			name: "Item1",
			slug: "item-1",
			embed: '6wD4V0rvlDI'
		},
		{
			name: "Item2",
			slug: "item-2",
			embed: '6wD4V0rvlDI'
		},
		{
			name: "Item3",
			slug: "item-3",
			embed: null
		}
	]
	constructor(private sanitizer: DomSanitizer) { }

	ngOnInit() {
	}

	getEmbedURL(embed){
		return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/'+embed)
	}

}
