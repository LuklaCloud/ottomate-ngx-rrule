import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LuklaNgxRruleModule } from 'ngx-rrule';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    LuklaNgxRruleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
