import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wind'
})
export class WindPipe implements PipeTransform {

  transform(value: string | number): string {
    return value + 'km/h';
  }

}
