import { Cell } from '../models/cell';
import { IBoardIterator } from '../interfaces/board-iterator';

export class GenerationFactory {

    constructor(private cellHelper: IBoardIterator) {
    }

    public getNextGenBoard(cells: Cell[]): Cell[] {
        let nextBoard: Cell[] = [];
        cells.forEach((cell) => {
            nextBoard.push(this.cellHelper.getNextGenCell(cell, cells));
        });
        return nextBoard;
    }
}
