import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxRruleComponent } from './ngx-rrule.component';
import { StartComponent } from './components/start/start.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EndComponent } from './components/end/end.component';
import { RepeatComponent } from './components/repeat/repeat.component';
import { WeeklyComponent } from './components/repeat/weekly/weekly.component';
import { MonthlyComponent } from './components/repeat/monthly/monthly.component';
import { YearlyComponent } from './components/repeat/yearly/yearly.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

@NgModule({
  declarations: [NgxRruleComponent, StartComponent, EndComponent, RepeatComponent, WeeklyComponent, MonthlyComponent, YearlyComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot()
  ],
  exports: [NgxRruleComponent]
})
export class NgxRruleModule { }
