import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, ContentComponent, MenuComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
