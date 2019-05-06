import { Component } from '@angular/core';
import { City } from '../city';

@Component({
  selector: 'menu-bar',
  templateUrl: './menu.component.html',
  styleUrls: [ './menu.component.css' ]
})
export class MenuComponent  {
  header: string = 'Select a city:';
  cities: City[]; 

  // TODO: Add an event emitter property
  // decorated with @Output

  setMenuOptions(cities: City[]) {
    this.cities = cities;
  }

  selectCity(city: City) {
    // TODO: emit the selected city from the emitter
    // so that the ContentComponent can render
    // the city details
  }
}
