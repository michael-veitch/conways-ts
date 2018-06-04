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
  @Output() stateChanged: EventEmitter<boolean> = new EventEmitter<boolean>();
  
  constructor() { }

  ngOnInit() {
    if (!this.cell) {
      this.cell = new Cell(false);
    }
    this.isAlive = this.cell.isAlive;
  }

  public toggleState(): void {
    this.isAlive = !this.isAlive;
    this.stateChanged.emit(this.isAlive);
  }

}
