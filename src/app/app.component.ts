import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuComponent } from './menu/menu.component';

import { CITIES } from './mock-cities';
import { City } from './city';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  @ViewChild(MenuComponent)
  private menuPane: MenuComponent;

  // TODO: Create another property with
  // a ViewChild decorator for a ContentComponent

  ngOnInit() {
    this.menuPane.setMenuOptions(CITIES);
  }

  setSelected(event: City) {
    // TODO: Set the data for the selected city on
    // ContentComponent
  }

}
