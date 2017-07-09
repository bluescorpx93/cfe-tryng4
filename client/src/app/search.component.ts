import { Component, OnInit} from '@angular/core';
import { Router} from '@angular/router';

@Component({
	selector: 'search',
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit{
	constructor(private router: Router){}
	searchedQuery: string;

	submitSearch(event, formData){
		// console.log(event);
		// console.log(formData);
		// console.log(formData.value);
		
		this.searchedQuery= formData.value['searchQuery']
		if (this.searchedQuery){
			this.router.navigate(['/search', {query: this.searchedQuery}])
		}
		
	}

	searchQueryChange(event, formData){
		this.searchedQuery= formData.value['searchQuery']
		if (this.searchedQuery.length>0){
			this.router.navigate(['/search', {query: this.searchedQuery}])
		}

	}
	ngOnInit(){

	}

}