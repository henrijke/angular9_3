import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'listPipe',
  pure: false
})
// TODO: LAITA TÄÄ TOIMII:--_DDDD
export class ListPipePipe implements PipeTransform {

  transform(value: any, args: any[] = null): any {
    return Object.keys(value);
    // .map(key => value[key]);
  }

}
