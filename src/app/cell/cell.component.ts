import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Cell } from '../models/cell';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})
export class CellComponent implements OnInit {

  public isAlive: boolean;

  @Input() cell: Cell;
  @Output() stateChanged: EventEmitter<Cell> = new EventEmitter<Cell>();
  
  constructor() { }

  ngOnInit() {

  }

  public toggleState(): void {
    this.cell.isAlive = !this.cell.isAlive;
    this.stateChanged.emit(this.cell);
  }

}
