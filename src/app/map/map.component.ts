import {Component, HostListener, OnInit} from '@angular/core';
import { ApiservicesService } from '../services/apiservices.service';
import { ListServiceService } from '../services/list-service.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  constructor(public apiService: ApiservicesService, public listService: ListServiceService) {
  }

  infoWind;

  ngOnInit() {
    this.apiService.getUserCoordinates();
  }

  openIW (data) {
    if (this.infoWind) {
      this.infoWind.close();
    }
    this.infoWind = data;
  }
  test (point) {
        if (point.type_id.length > 1) {
          return './assets/marker-icons/000.png';
        } else {
            return './assets/marker-icons/' + point.type_id[0] + '.png';
        }
  }

hideList() {
  document.querySelector('#list').classList.toggle('hidden');
}
}
