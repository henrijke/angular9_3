import { Component, OnInit } from '@angular/core';
import { ApiservicesService } from '../services/apiservices.service';
import {FormControl} from '@angular/forms';

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
  constructor(public apiService: ApiservicesService) { }

  ngOnInit() {
  }

  search = () => {
      console.log(this.address);
  }

  openSideNav = () => {
   this.apiService.openSideNav();
  }

  changeAddress = () => {
   console.log(this.address);
   this.apiService.getAddressCoordinates(this.address);
  }

  autocompleteSearch = () => {
   this.options = [];
   this.data = this.apiService.getAutocomplete(this.address);
  }

}
