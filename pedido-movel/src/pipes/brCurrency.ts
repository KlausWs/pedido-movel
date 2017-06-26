import { Pipe } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Pipe({
  name: 'brcurrency'
})
export class BrCurrencyPipe extends CurrencyPipe {
  transform(value: number): any {
    return super.transform(value, 'BRL', true, '2.2-2');
  }
}