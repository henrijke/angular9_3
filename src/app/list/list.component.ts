import { Component, OnInit } from '@angular/core';
import {ListServiceService} from '../services/list-service.service';
import {FormControl} from '@angular/forms';
import {ApiservicesService} from '../services/apiservices.service';
import {TrashName} from '../models/trash-name';
import {MapComponent} from '../map/map.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  myControl: FormControl = new FormControl();
  trashArray = [
  ];
  trash = '';
  typeList = [];

  trashNameList = [];

  constructor(private listService: ListServiceService, public apiService: ApiservicesService, public map: MapComponent) { }
  ngOnInit() {
  }


  sendRecyclingTypes() {
  /*  const list = [];
    for (const array of this.trashArray) {
      list.push(this.listService.nameToType(array.type));
    }
    this.apiService.getWasteByRecycleList(list);*/
    if (this.map.infoWind) {
        this.map.infoWind.close();
        this.map.infoWind = null;
    }
    this.apiService.getRecyclingPoints();
  }

  sendListToService() {
    const list = [];
    for (const array of this.trashArray) {
      list.push(this.listService.nameToType(array.type));
    }
    this.apiService.addAddressList(list);
  }

  listPush(thingToPush) {
    let key = false;
   for (const array in this.trashArray) {
     if ( this.trashArray[array].type === thingToPush) {
        this.trashArray[array].count += 1;
        this.trashArray[array].trashName.push(this.trash);
        key = true;
     }}
     if (!key) {
       this.trashArray.push(new TrashName(thingToPush, [this.trash], 1));
    }

     }
  objectLister() {
    const list = [];
    for (const object in this.trashArray) {
      if (true) {
        list.push(this.trashArray[object].trashName);
       }
    }
    return list;
  }
  addList() {
    if (this.trash) {
      this.listPush(this.listService.wordToType(this.trash).name);
      this.sendListToService();
      this.trash = '';
    } else {
    }
  }

  emptyList() {
    this.trashArray = [];
    this.sendListToService();
  }
  autocompleteList() {
    this.typeList = this.listService.listParser(this.trash);
  }
  remove(trash, listElement) {
    // kommentoin alla olevan pois kun oli jäänyt kesken
      const removable = this.trashArray[listElement].trashName.indexOf(trash);
      if ( removable > -1) {
        this.trashArray[listElement].trashName.splice(removable, 1);
        if (this.trashArray[listElement].trashName.length < 1) {
          this.trashArray.splice( listElement, 1);
    // this.trashArray.splice()
  }}
  this.sendListToService();
}

}
