import { waterCan } from "@constants/itens/itens";
import { IInventoryComponent, IInventoryItemType } from "@interfaces/IInventoryComponent";
import { IPositionComponent } from "@interfaces/IPositionComponent";

export class InventoryComponent implements IInventoryComponent {
    equiped?: IInventoryItemType;
    gold: number;
    itens: IInventoryItemType[];
    water: number;
    select: IPositionComponent = { x: 0, y: 0 };
    size: number;

    constructor(gold = 0, water = 3, itens = [waterCan], size = 10) {
        this.gold = gold;
        this.water = water;
        this.itens = itens;
        this.size = size;
    }

    equip(item: IInventoryItemType) {
        this.equiped = item
    }

    unequip() {
        this.equiped = undefined
    }

    add(item: IInventoryItemType) {
        if (this.itens.length === this.size) return
        this.itens.push(item)
    }


}