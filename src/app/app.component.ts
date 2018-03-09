import {Component} from '@angular/core';
import {ApiservicesService} from './services/apiservices.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  showFiller = false;

  constructor(public apiService: ApiservicesService) { }
}
