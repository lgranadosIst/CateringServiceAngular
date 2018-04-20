import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'money'
})
export class MoneyPipe implements PipeTransform {

  transform(value: any, zeros: any): any {
  	let x = ("0000000000000").substring(0,zeros);
    return value+'.'+x;
  }

}