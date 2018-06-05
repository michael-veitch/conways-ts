import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
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

  public cells: Cell[];
  public board: Cell[][];
  public size = 20;
  public started: boolean = false;

  public interval;

  private builder: CellsBuilder = new CellsBuilder();
  private factory: GenerationFactory = new GenerationFactory(new CellHelper());

  constructor() { }
  
  ngOnInit() {
    this.cells = this.builder.build(this.size);
    this.mapToBoard(this.cells);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.cells = this.builder.build(this.size);
    this.mapToBoard(this.cells);
  }
  
  public changeSize(size: number) {
    this.size = size;
    this.cells = this.builder.build(this.size);
    this.mapToBoard(this.cells);
  }

  public clear() {
    this.cells.forEach((cell) => {
      cell.isAlive = false;
    });
    this.mapToBoard(this.cells);
  }

  private mapToBoard(cells: Cell[]): void {
    let board: Cell[][] = [];
    for (let rowIndex = 0; rowIndex < this.size; rowIndex++) { 
      let row: Cell[] = [];
      for (let colIndex = 0; colIndex < this.size; colIndex++) {
        let cell = cells.find((cell) => cell.rowIndex == rowIndex && cell.columnIndex == colIndex);
        row.push(cell);
      }
      board.push(row);
    }
    this.board = board;
  }

  public updateCell(newCell: Cell): void {
    this.cells.find((cell) => cell.rowIndex === newCell.rowIndex && cell.columnIndex === newCell.columnIndex).isAlive = newCell.isAlive;
  }

  public toggleStart(): void {   
    this.started = !this.started;
    if(this.started){
      this.interval = setInterval(() => {
        this.getNextBoard();
      }, 100)
    } else {
      clearInterval(this.interval);
    }

  }

  private getNextBoard(): void {
    this.cells = this.factory.getNextGenBoard(this.cells);
    this.mapToBoard(this.cells);
  }

  public generateRandomBoard(): void {
    this.cells.forEach((cell: Cell) => {
      let randomNumber = this.generateRandomNumber();
      if(randomNumber > 0 && randomNumber < 50) {
        cell.isAlive = false;
      } else {
        cell.isAlive = true;
      }
    })
  }


  private generateRandomNumber(): number {
    let randomNumber = Math.floor(Math.random() * 100);
    return randomNumber;
  }
}
