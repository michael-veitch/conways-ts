import { Cell } from '../models/cell';
import { Output, EventEmitter } from '@angular/core';
import { CellHelper } from './helpers/cell-helper';
import { IBoardIterator } from './interfaces/board-iterator';

export class GenerationFactory {

    @Output() public nextGeneration: EventEmitter<Cell[][]> = new EventEmitter<Cell[][]>();

    public rowIndex = 0;
    public columnIndex = 0;

    public generationHelper: IBoardIterator;

    constructor(public cells: Cell[][]) {
        this.generationHelper = new CellHelper();
        this.getNextBoard();
    }

    public getNextBoard(): void {
        const nextBoard: Cell[][] = [];
        this.cells.forEach((row) => {
            row.forEach((cell) => {
                nextBoard[this.rowIndex][this.columnIndex] = this.getNextCell(cell);
                this.columnIndex++;
            });
            this.rowIndex++;
        });
        this.nextGeneration.emit(nextBoard);
    }

    public getNextCell(cell: Cell): Cell {
        return this.generationHelper.getNextGenCell(cell, this.cells);
    }
}
