import { Cell } from "../models/cell";

export interface IBuilder {
    build(size: number): Cell[];
}