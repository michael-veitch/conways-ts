import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Cell } from '../models/cell';
import { CellsBuilder } from '../builders/board-builder';
import { GenerationFactory } from '../generation-factory/generation-factory';
import { CellHelper } from '../helpers/cell-helper';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit, OnChanges{


  @Input() size: number;

  public cells: Cell[];
  public board: Cell[][];
  public started: boolean = false;

  public interval;

  private builder: CellsBuilder = new CellsBuilder();
  private factory: GenerationFactory = new GenerationFactory(new CellHelper());

  constructor() { }
  
  ngOnInit() {
    this.cells = this.builder.build(this.size);
    this.board = this.mapToBoard(this.cells);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.cells = this.builder.build(this.size);
    this.board = this.mapToBoard(this.cells);
  }

  private mapToBoard(cells: Cell[]): Cell[][] {
    let board: Cell[][] = [];
    for (let rowIndex = 0; rowIndex < this.size; rowIndex++) { 
      let row: Cell[] = [];
      for (let colIndex = 0; colIndex < this.size; colIndex++) {
        let cell = cells.find((cell) => cell.rowIndex == rowIndex && cell.columnIndex == colIndex);
        row.push(cell);
      }
      board.push(row);
    }
    return board;
  }

  public updateCell(newCell: Cell): void {
    this.cells.find((cell) => cell.rowIndex === newCell.rowIndex && cell.columnIndex === newCell.columnIndex).isAlive = newCell.isAlive;
  }

  public toggleStart(): void {   
    this.started = !this.started;
    if(this.started){
      this.interval = setInterval(() => {
        this.board = this.getNextBoard();
      }, 1000)
    } else {
      clearInterval(this.interval);
    }

  }

  private getNextBoard(): Cell[][] {
    this.cells = this.factory.getNextGenBoard(this.cells);
    let board = this.mapToBoard(this.cells);
    return board;
  }
}
