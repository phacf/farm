import { IcropComponent, IcropTile } from "@interfaces/IcropComponent";

export class CropsComponent implements IcropComponent {
    crops: IcropTile[];

    constructor(crops: IcropTile[] = []) {
        this.crops = crops
    }

    toTileCoords(x: number, y: number) {
        return {
            x: Math.floor((x + 4) / 8),
            y: Math.floor((y + 4) / 8),
        };
    }

    add(crop: IcropTile): void {
        const { x, y } = this.toTileCoords(crop.location.x, crop.location.y);
        crop.location.x = x;
        crop.location.y = y;
        this.crops.push(crop);
    }

    remove(x: number, y: number): void {
        const tile = this.toTileCoords(x, y);
        this.crops = this.crops.filter((c) => c.location.x !== tile.x || c.location.y !== tile.y);
    }

    get(x: number, y: number): IcropTile | undefined {
        return this.crops.find(c => c.location.x === x && c.location.y === y)
    }
}