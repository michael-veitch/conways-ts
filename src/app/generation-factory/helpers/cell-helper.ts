import { Cell } from "../../models/cell";

export class CellHelper {

    constructor(public board: Cell[][]){
        
    }

    public applyRules(cell: Cell): Cell{
        let cellNeighbours: Cell[][] = [];
        cellNeighbours = this.getNeighbours(cell);
        
    }

    protected getNeighbours(cell: Cell): Cell[][]{
        return
    }
}