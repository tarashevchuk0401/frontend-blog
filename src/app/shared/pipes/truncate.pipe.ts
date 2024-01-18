import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
  standalone: true
})
export class TruncatePipe implements PipeTransform {

  transform(value: string): string {
    if(value.length <= 300){
      return value
    } else {
      return value.substring(0, 300) + '...'
    }
  }

}
