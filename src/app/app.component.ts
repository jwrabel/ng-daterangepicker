import { Component, OnInit } from '@angular/core';
import { AngularDateRangePickerOptions } from '../angular-daterangepicker';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  options: AngularDateRangePickerOptions;

  ngOnInit() {
    this.options = { theme: 'default' };
  }
}
