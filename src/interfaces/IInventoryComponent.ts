import { PlantStage, SeedType } from "./IcropComponent";
import { IPositionComponent } from "./IPositionComponent";

export interface IInventoryComponent {
    itens: IInventoryItemType[];
    equiped?: IInventoryItemType
    water: number;
    gold: number;
    select: IPositionComponent;
    size: number;
}

export type ItemType = 'hoe'
    | 'can'
    | 'seed'
    | 'food'

export interface IInventoryItemBase {
    id?: number;
    label: string;
    type: ItemType;
    ItemSprite: number;
}

export interface ISeedItem extends IInventoryItemBase {
    type: 'seed';
    seedType: SeedType;
    stage: PlantStage;
    stageTime: number;
    amount: number;
}

export interface IToolItem extends IInventoryItemBase {
    type: 'hoe' | 'can';
}

export interface IFoodItem extends IInventoryItemBase{
    type: 'food',
    price: number, 
    label: SeedType
}

export type IInventoryItemType = IToolItem | ISeedItem | IFoodItem;