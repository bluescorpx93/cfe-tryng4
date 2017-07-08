import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'video-list',
	templateUrl: './video-list.component.html',
	styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {
	title = "Video List"
	todayDate;

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
	constructor() { }

	ngOnInit() {
		this.todayDate = new Date()
	}

	getEmbedURL(embed){
		return 'http://www.youtube.com/embed/'+embed
	}

}
