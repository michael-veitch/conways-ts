import { Cell } from "../../models/cell";

export interface IBoardIterator {

    getNextGenCell(cell: Cell, board: Cell[]): Cell;
}