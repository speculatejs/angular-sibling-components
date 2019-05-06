import { Component } from '@angular/core';
import { CITIES } from '../mock-cities';
import { City } from '../city';

@Component({
  selector: 'content-pane',
  templateUrl: './content.component.html',
  styleUrls: [ './content.component.css' ]
})
export class ContentComponent  {
  sectionName: string = 'Details';
  city: City;

  setSelected(selected) {
    console.log('selected ' + selected);
    this.city = CITIES.find(city => city.name === selected);
  }
  
}
