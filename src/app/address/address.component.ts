import { Component, OnInit } from '@angular/core';
import { ApiservicesService } from '../services/apiservices.service';
import {FormControl} from '@angular/forms';
import {MapComponent} from '../map/map.component';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {
  myControl: FormControl = new FormControl();
  address = '';
  options = [];
  data;
  constructor(public apiService: ApiservicesService, public map: MapComponent) { }

  ngOnInit() {
  }

  search = () => {
      console.log(this.address);
  }

  openSideNav = () => {
   this.apiService.openSideNav();
  }

  changeAddress = () => {
      this.map.closeWindow();
      this.apiService.getAddressCoordinates(this.address);
  }

  autocompleteSearch = () => {
   this.options = [];
   this.data = this.apiService.getAutocomplete(this.address);
  }

}
