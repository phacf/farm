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

export type IInventoryItemType = IToolItem | ISeedItem;