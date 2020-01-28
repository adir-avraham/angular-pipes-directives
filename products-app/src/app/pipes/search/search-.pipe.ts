import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(products: any, searchText: any, searchKey: any): any {
    console.log("p rom pipe", products)
    if (!searchText) return products;
    if (!Array.isArray(products)) return [];
    if (searchKey === "productName") {

      return products.filter((product) => {
        return product[searchKey].toLowerCase().includes(searchText.toLowerCase())
      })
    } else {
      return products.filter((product) => {
        return product[searchKey] === parseInt(searchText)})
    }
  }

}
