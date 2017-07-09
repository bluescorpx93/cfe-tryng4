import { Pipe, Injectable, PipeTransform} from "@angular/core";
@Pipe({
	name: 'SearchNamePipe'
})
@Injectable()
export class SearchNamePipe{
	transform(value, args: string){
		let nameSearch=args.toLowerCase();
		if (nameSearch == null) {
			return null;
		}
		return value.filter((item) => item.name.toLowerCase().includes(nameSearch)) ;
	}
}