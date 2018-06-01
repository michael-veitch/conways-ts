import { Cell } from '../../models/cell';

export class CellHelper {


    constructor(public board: Cell[][]) {

    }

    public applyRules(cell: Cell): Cell {
        let nextGenCell: Cell;
        const neighbours = this.getNeighbours(cell);
        const willCellLive = this.doesCellLive(neighbours, cell.isAlive);
        nextGenCell = new Cell(willCellLive);
        return nextGenCell;
    }

    protected getNeighbours(cell: Cell): number {
        let count: number;

        for (let row = cell.rowIndex - 1; row < cell.rowIndex + 1; row++) {
            for (let col = cell.columnIndex - 1; col < cell.columnIndex + 1; col++) {

                if (row === cell.rowIndex && col === cell.columnIndex) {
                    break;
                }

                if (this.board[row][col].isAlive) {
                    count++;
                }

            }
        }

        return count;
    }

    protected doesCellLive(neighbours: number, isCellAlive: boolean): boolean {
        if (neighbours < 2) {
            return false;
        }

        if (neighbours >= 2 || neighbours <= 3) {
            return true;
        }

        if (neighbours > 3) {
            return false;
        }

        if (!isCellAlive && neighbours === 3) {
            return true;
        }
    }
}
