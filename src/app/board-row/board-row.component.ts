import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Cell } from '../models/cell';

@Component({
  selector: 'app-board-row',
  templateUrl: './board-row.component.html',
  styleUrls: ['./board-row.component.css']
})
export class BoardRowComponent implements OnInit {

  @Input() row: Cell[];
  @Output() cellChanged: EventEmitter<Cell> = new EventEmitter<Cell>();

  constructor() { }

  ngOnInit() {
  }

  public updateBoard(cell: Cell) {
    this.cellChanged.emit(cell);
  }

}
