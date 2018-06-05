import { Component } from '@angular/core';
import { Cell } from './models/cell';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  public cell = new Cell(false, 1, 1);
}
