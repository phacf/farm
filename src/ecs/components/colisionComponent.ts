import { IColisionComponent } from "@interfaces/IColisionComponent";

export class TileCollisionComponent implements IColisionComponent {
    tiles: number[];
    constructor(tiles: number[] = []) {
        this.tiles = tiles;
    }
}