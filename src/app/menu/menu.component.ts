import { Component, Output, EventEmitter } from '@angular/core';
import { CITIES } from '../mock-cities';
import { City } from '../city';


@Component({
  selector: 'menu-bar',
  templateUrl: './menu.component.html',
  styleUrls: [ './menu.component.css' ]
})
export class MenuComponent  {
  sectionName: string = 'Select a city:';
  cities: City[]; 

  @Output() citySelected = new EventEmitter<string>();

  constructor() {
    this.cities = CITIES;
  }

  selectCity(city: string) {
    console.log('the city '+ city);
    this.citySelected.emit(city);
  }
}
