import { Component, Output, EventEmitter } from '@angular/core';
import { City } from '../city';

@Component({
  selector: 'menu-bar',
  templateUrl: './menu.component.html',
  styleUrls: [ './menu.component.css' ]
})
export class MenuComponent  {
  header: string = 'Select a city:';
  cities: City[]; 

  @Output() citySelected = new EventEmitter<City>();

  setMenuOptions(cities: City[]) {
    this.cities = cities;
  }

  selectCity(city: City) {
    this.citySelected.emit(city);
  }
}
