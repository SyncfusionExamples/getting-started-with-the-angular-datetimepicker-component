import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myangularproject';
  public dateValue: Date = new Date("06/06/2022 15:30")
  public minDate: Date = new Date("06/06/2022 09:00")
  public maxDate: Date = new Date("06/10/2022 18:00")
}
