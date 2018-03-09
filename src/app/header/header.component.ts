import { Component, OnInit } from '@angular/core';
import { ApiservicesService } from '../services/apiservices.service';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  myControl: FormControl = new FormControl();
  address = '';
  isMobile = false;
  options = [];
  data;
  constructor(public apiService: ApiservicesService) { }

  ngOnInit() {
      window.addEventListener('resize', this.isItMobile);
  }

  isItMobile = () => {
      if (window.innerWidth < 500) {
          this.isMobile = true;
      } else {
          this.isMobile = false;
      }
      console.log(this.isMobile);
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
