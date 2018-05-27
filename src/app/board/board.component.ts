import { Component, OnInit, Input } from '@angular/core';
import { Cell } from '../models/cell';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  @Input()
  public cells: Cell[];

  constructor() { }

  ngOnInit() {
    this.start();
  }

  public start(): void {
    
  }

}
