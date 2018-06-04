import { Cell } from '../models/cell';
import { Output, EventEmitter } from '@angular/core';
import { CellHelper } from './helpers/cell-helper';
import { IBoardIterator } from './interfaces/board-iterator';

export class GenerationFactory {

    @Output() public nextGeneration: EventEmitter<Cell[]> = new EventEmitter<Cell[]>();

    constructor(private cellHelper: IBoardIterator) {
    }

    public getNextGenBoard(cells: Cell[]): void {
        let nextBoard: Cell[] = [];
        cells.forEach((cell) => {
            nextBoard.push(this.cellHelper.getNextGenCell(cell, cells));
        });
        this.nextGeneration.emit(nextBoard);
    }
}
