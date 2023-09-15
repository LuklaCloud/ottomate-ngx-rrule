import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { OttomateNgxRruleModule } from 'ottomate-ngx-rrule';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    OttomateNgxRruleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
