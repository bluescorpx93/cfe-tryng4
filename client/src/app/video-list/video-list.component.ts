import { Component, OnInit } from '@angular/core';

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
			slug: "item-1"
		},
		{
			name: "Item2",
			slug: "item-2"
		},
		{
			name: "Item3",
			slug: "item-3"
		}
	]
	constructor() { }

	ngOnInit() {
	}

}
