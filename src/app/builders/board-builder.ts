import { Cell } from "../models/cell";
import { IBuilder } from "../interfaces/builder";

export class CellsBuilder implements IBuilder {

    public build(size: number) : Cell[] {
        let board: Cell[] = [];
        for (let row = 0; row < size; row++) {
            for(let col = 0; col < size; col++) {
                board.push(new Cell(false, row, col));
            }
        }
        return board;
    }
}