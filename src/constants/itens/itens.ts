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
    ItemSprite: 0,
    label: 'carrot seed',
    seedType: "carrot",
    stageTime: 600,
    stage: "seed",
    amount
}

export const beetSeed: IInventoryItemType = {
    type: "seed",
    ItemSprite: 0,
    label: 'beet seed',
    seedType: "beet",
    stageTime: 1000,
    stage: "seed",
    amount

}

export const cornSeed: IInventoryItemType = {
    type: "seed",
    ItemSprite: 0,
    label: 'corn seed',
    seedType: "corn",
    stageTime: 1200,
    stage: "seed",
    amount

}

export const tomatoSeed: IInventoryItemType = {
    type: "seed",
    ItemSprite: 0,
    label: 'tomato seed',
    seedType: "tomato",
    stageTime: 600,
    stage: "seed",
    amount

}

export const pupkinSeed: IInventoryItemType = {
    type: "seed",
    ItemSprite: 0,
    label: 'pupkin seed',
    seedType: "pupkin",
    stageTime: 1500,
    stage: "seed",
    amount

}