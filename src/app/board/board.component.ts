import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Cell } from '../models/cell';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit, OnChanges {


  public cells: Cell[][];
  @Input() size: number;

  constructor() { }

  ngOnInit() {
    this.start();
  }

  public start(): void {
    
  }

}
