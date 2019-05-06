import { Component, OnInit, ViewChild } from '@angular/core';
import { ContentComponent } from './content/content.component';
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

  @ViewChild(ContentComponent)
  private contentPane: ContentComponent;

  ngOnInit() {
    this.menuPane.setMenuOptions(CITIES);
  }

  setSelected(event: City) {
    this.contentPane.setSelected(event);
  }

}
