import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(items: any[], searchTerm: string): any[] {
    if (!items) return [];
    if (!searchTerm) return items;
    
    searchTerm = searchTerm.toLowerCase();

    return items.filter(item => {
      // Modify this part based on your data structure
      return item.title.toLowerCase().includes(searchTerm);
    });
  }


}
