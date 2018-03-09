import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wastename'
})
export class WastenamePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    switch (value) {
      case '100':
      return 'Sekajäte';
      case '101':
      return 'Bio- ja puutarhajäte';
      case '102':
      return 'Energia';
      case '103':
      return 'Paperi';
      case '104':
      return 'Pahvi';
      case '105':
      return 'Kartonki';
      case '106':
      return 'Metalli';
      case '107':
      return 'Lasi';
      case '108':
      return 'Vaarallinen jäte';
      case '109':
      return 'Sähkölaitteet (SER)';
      case '110':
      return 'Paristot';
      case '111':
      return 'Muovi';
      case '113':
      return 'Tekstiili';
      case '114':
      return 'Muu jäte';
      case '115':
      return 'Akut';
      case '116':
      return 'Lamput';
      case '117':
      return 'Puu';
      case '118':
      return 'Kyllästetty puu';
      case '119':
      return 'Rakennus- ja purkujäte';
      default:
      return 'Nan';
    }
  }

}
