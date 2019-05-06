import { Component, ViewChild } from '@angular/core';
import { ContentComponent } from './content/content.component';
import { CITIES } from './mock-cities';
import { City } from './city';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  @ViewChild(ContentComponent)
  private contentPane: ContentComponent;

  setSelected(event: string) {
    console.log('set selected ' + event);
    this.contentPane.setSelected(event);
  }

}
