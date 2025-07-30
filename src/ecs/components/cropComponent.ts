import { IcropComponent, IcropTile } from "@interfaces/IcropComponent";

export class CropsComponent implements IcropComponent {
    crops: IcropTile[];

    constructor(crops: IcropTile[] = []) {
        this.crops = crops
    }

    add(crop: IcropTile): void {
        this.crops.push(crop)
    }

    remove(x: number, y: number): void {
        this.crops = this.crops.filter(c => c.location.x !== x && c.location.y !== y)
    }

    get(x: number, y: number): IcropTile | undefined {
        return this.crops.find(c => c.location.x === x && c.location.y === y)
    }
}