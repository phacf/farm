import { IInventoryComponent, IInventoryItemType } from "@interfaces/IInventoryComponent";
import { IPositionComponent } from "@interfaces/IPositionComponent";

export class InventoryComponent implements IInventoryComponent {
    equiped?: IInventoryItemType;
    gold: number;
    itens: IInventoryItemType[];
    water: number;
    select: IPositionComponent = { x: 1, y: 1 };

    constructor(gold = 0, water = 3, itens = []) {
        this.gold = gold;
        this.water = water;
        this.itens = itens
    }

    equip(item: IInventoryItemType) {
        this.equiped = item
    }

    unequip() {
        this.equiped = undefined
    }

    add(item: IInventoryItemType) {
        if (this.itens.length === 10) return
        this.itens.push(item)
    }


}