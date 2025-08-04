import { InventoryComponent } from "@ecs/components/inventoryComponent";
import { CropMap } from "@interfaces/IcropComponent";
import { IInventoryItemType } from "@interfaces/IInventoryComponent";

export const soil = 0;
export const grass = 2;
export const dirt = 17;
export const seed = 18;
export const watered = 19;

const amount = 9

export const cropsMap: CropMap = {
    beet: {
        seed,
        watered,
        plant: 33,
        grown: 82,
    },
    carrot: {
        seed,
        watered,
        plant: 33,
        grown: 34
    },
    corn: {
        seed,
        watered,
        plant: 33,
        grown: 114
    },
    grape: {
        seed,
        watered,
        plant: 49,
        grown: 66
    },
    pupkin: {
        seed,
        watered,
        plant: 33,
        grown: 98
    },
    tomato: {
        seed,
        watered,
        plant: 49,
        grown: 50
    },
}

export const hoe: IInventoryItemType = {
    label: 'Hoe',
    type: 'hoe',
    ItemSprite: 262
}

export const waterCan: IInventoryItemType = {
    label: 'water can',
    type: 'can',
    ItemSprite: 261
}

export const carrotSeed: IInventoryItemType = {
    type: "seed",
    ItemSprite: 265,
    label: 'carrot seed',
    seedType: "carrot",
    stageTime: 600,
    stage: "seed",
    amount
}

export const beetSeed: IInventoryItemType = {
    type: "seed",
    ItemSprite: 267,
    label: 'beet seed',
    seedType: "beet",
    stageTime: 1000,
    stage: "seed",
    amount

}

export const cornSeed: IInventoryItemType = {
    type: "seed",
    ItemSprite: 269,
    label: 'corn seed',
    seedType: "corn",
    stageTime: 1200,
    stage: "seed",
    amount

}

export const tomatoSeed: IInventoryItemType = {
    type: "seed",
    ItemSprite: 264,
    label: 'tomato seed',
    seedType: "tomato",
    stageTime: 600,
    stage: "seed",
    amount

}

export const pupkinSeed: IInventoryItemType = {
    type: "seed",
    ItemSprite: 268,
    label: 'pupkin seed',
    seedType: "pupkin",
    stageTime: 1500,
    stage: "seed",
    amount

}

export const carrot: IInventoryItemType = {
    type: 'food',
    ItemSprite: 258,
    label: 'carrot',
    price: 1,
}

export const beet: IInventoryItemType = {
    type: 'food',
    ItemSprite: 290,
    label: 'beet',
    price: 1,
}

export const corn: IInventoryItemType = {
    type: 'food',
    ItemSprite: 338,
    label: 'corn',
    price: 1,
}

export const grape: IInventoryItemType = {
    type: 'food',
    ItemSprite: 306,
    label: 'grape',
    price: 1,
}

export const pupkin: IInventoryItemType = {
    type: 'food',
    ItemSprite: 322,
    label: 'pupkin',
    price: 1,
}

export const tomato: IInventoryItemType = {
    type: 'food',
    ItemSprite: 274,
    label: 'tomato',
    price: 1,
}

export const foods = [carrot, tomato, pupkin, grape, corn, beet]