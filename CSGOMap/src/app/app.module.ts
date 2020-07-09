import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// tslint:disable-next-line: import-spacing
import { HttpClientModule }    from '@angular/common/http';
import { AppComponent } from './app.component';
import { MapsComponent } from './maps/maps.component';

@NgModule({
  declarations: [
    AppComponent,
    MapsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

