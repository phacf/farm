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
        const location = { x, y }
        this.crops.push({ ...crop, location });
    }

    remove(x: number, y: number): void {
        this.crops = this.crops.filter((c) => c.location.x !== x && c.location.y !== y);
    }

    get(x: number, y: number): IcropTile | undefined {
        const { x: tilex, y: tiley } = this.toTileCoords(x, y)
        return this.crops.find(c => c.location.x === tilex && c.location.y === tiley)
    }
}