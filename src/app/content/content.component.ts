import { Component } from '@angular/core';
import { CITIES } from '../mock-cities';
import { City } from '../city';

@Component({
  selector: 'content-pane',
  templateUrl: './content.component.html',
  styleUrls: [ './content.component.css' ]
})
export class ContentComponent  {
  header: string = 'Details';
  city: City;

  setSelected(selected) {
    this.city = selected;
  }
  
}
