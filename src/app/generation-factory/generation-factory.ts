import { Cell } from '../models/cell';
import { Output, EventEmitter } from '@angular/core';
import { CellHelper } from './helpers/cell-helper';

export class GenerationFactory {

    @Output() public nextGeneration: EventEmitter<Cell[][]> = new EventEmitter<Cell[][]>();

    public rowIndex = 0;
    public columnIndex = 0;

    public cellHelper: CellHelper;

    constructor(public cells: Cell[][]) {
        this.cellHelper = new CellHelper(this.cells);
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
        return this.cellHelper.applyRules(cell);
    }
}
