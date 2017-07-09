import { Component, OnInit, Input} from '@angular/core';
import { Router} from '@angular/router';

	@Component({
	selector: 'search',
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit{
	constructor(private router: Router){}

	@Input()
	query: string;
	
	submitSearch(event, formData){
		// console.log(event);
		// console.log(formData);
		// console.log(formData.value);
		let query= formData.value['searchQuery']
		if (query){
			this.router.navigate(['/search', {query: query}])
		}
		
	}

	searchQueryChange(){

	}
	ngOnInit(){

	}

}