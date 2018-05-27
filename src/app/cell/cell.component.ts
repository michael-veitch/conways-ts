import { Component, OnInit, Input } from '@angular/core';
import { Cell } from '../models/cell';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})
export class CellComponent implements OnInit {

  public isAlive: boolean;

  @Input()
  public cell: Cell;

  constructor() { }

  ngOnInit() {
    this.isAlive = this.cell.alive;
  }

}
