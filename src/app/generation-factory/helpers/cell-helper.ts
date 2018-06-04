import { Cell } from '../../models/cell';
import { IBoardIterator } from '../interfaces/board-iterator';

export class CellHelper implements IBoardIterator {


    constructor() {

    }

    public getNextGenCell(cell: Cell, board: Cell[]): Cell {

        let neighbours = this.getNeighbours(cell, board);
        let cellLives = this.doesCellLive(cell, neighbours);
        let nextGenCell = new Cell(cellLives, cell.rowIndex, cell.columnIndex);
        
        return nextGenCell;        
    }

    public getNeighbours(cell: Cell, cells: Cell[]): number {

        let count = 0;
        let startingRow = cell.rowIndex > 0 ? cell.rowIndex - 1 : 0
        let startingColumn = cell.columnIndex > 0 ? cell.columnIndex - 1 : 0;
        let lastRow = cell.rowIndex + 1;
        let lastColumn = cell.columnIndex + 1;

        for (let row = startingRow; row <= lastRow; row++) {
            for (let col = startingColumn; col <= lastColumn; col++) {
                if (!(row === cell.rowIndex && col === cell.columnIndex)) {
                    var neighbour = cells.find((cell) => cell.rowIndex === row && cell.columnIndex === col);
                    if (neighbour && neighbour.isAlive) {
                        count++;
                    }
                }
            }
        }
        return count;
    }

    public doesCellLive(cell: Cell, neighbourCount: number): boolean {
        
        if (!cell.isAlive && neighbourCount === 3) {
            return true;
        }

        if (cell.isAlive && neighbourCount >= 2 && neighbourCount <= 3) {
            return true;
        }

        if (cell.isAlive && neighbourCount < 2) {
            return false;
        }

        if (cell.isAlive && neighbourCount > 3) {
            return false;
        }

        return false;

    }
}
