import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'unNamed'
})
export class UnNamedPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return (value.length > 0) ? value : 'No Name'
  }
}
