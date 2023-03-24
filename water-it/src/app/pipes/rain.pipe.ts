import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rain'
})
export class RainPipe implements PipeTransform {

  transform(value: string | number): string {
    return value + 'mm';
  }

}
