import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currency'
})
export class CurrencyPipe implements PipeTransform {

  transform(price: any, currency: any): any {
    if (currency === "EUR") {
      
    return price * 100 + "eur";
    } else {
      return `${price * 1} ILS`
    }

  }
}
