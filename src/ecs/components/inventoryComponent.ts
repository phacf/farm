import { waterCan, hoe, carrotSeed } from "@constants/itens/itens";
import { IInventoryComponent, IInventoryItemType } from "@interfaces/IInventoryComponent";
import { IPositionComponent } from "@interfaces/IPositionComponent";
import { IdController } from "controllers/idController";

export class InventoryComponent implements IInventoryComponent {
    private idController = new IdController()

    equiped?: IInventoryItemType;
    gold: number;
    itens: IInventoryItemType[];
    water: number;
    select: IPositionComponent = { x: 0, y: 0 };
    size: number;

    constructor(gold = 0, water = 3, itens = [], size = 10) {
        this.gold = gold;
        this.water = water;
        this.itens = itens;
        this.size = size;

        this.add(hoe)
        this.add(waterCan)
        this.add(carrotSeed)
    }

    equip(item: IInventoryItemType) {
        if(this.equiped)this.add(this.equiped)
        this.equiped = item
        this.remove(item)
    }

    unequip() {
        this.equiped = undefined
    }

    add(item: IInventoryItemType) {
        if (this.itens.length === this.size) return

        if (!item.id) {
            this.itens.push({ ...item, id: this.idController.getNewId() })
            return
        }
        this.itens.push(item)
    }

    remove(item: IInventoryItemType){
        this.itens = this.itens.filter(i => i.id !== item.id)
    }

}