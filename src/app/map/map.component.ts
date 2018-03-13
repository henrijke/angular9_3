import {Component, HostListener, OnInit} from '@angular/core';
import { ApiservicesService } from '../services/apiservices.service';
import { ListServiceService } from '../services/list-service.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  constructor(public apiService: ApiservicesService, public listService: ListServiceService) {}


  ngOnInit = () => {
    this.apiService.getUserCoordinates();
  }

  closeRouteWindow = () => {
    this.apiService.closeRouteWindow();
  }

  closeWindow = () => {
    console.log(this);
    console.log('closeWindow1:' + this.apiService.infoWind);
    if (this.apiService.infoWind !== null) {
      console.log('closeWindow2');
      this.apiService.infoWind.close();
    }
    this.apiService.infoWind = null;
    console.log('closeWindow: nollattu infowind');
  }
/*
  getRouteHere = (destination) => {
    this.closeWindow();
    this.apiService.getTransportRoute(destination, 'transit');
  }
  */

  openIW = (data) => {
    console.log(this);
      console.log('openIW:' + this.apiService.infoWind);
      console.log('openIW:' + data);
    if (this.apiService.infoWind !== null) {
      console.log('openIW closing window');
      this.apiService.infoWind.close();
    }
    console.log('openIW setting data');
    this.apiService.infoWind = data;
    console.log(this.apiService.infoWind);
  }

  iconUrler = (point) => {
        if (point.type_id.length > 1) {
          return './assets/marker-icons/000.png';
        } else {
            return './assets/marker-icons/' + point.type_id[0] + '.png';
        }
  }
}
