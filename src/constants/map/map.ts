import { CropMap } from "@interfaces/IcropComponent";

export const MapConfig = {
    water: [4, 5, 6],
    wall: [20, 36, 61, 62, 63, 79, 95, 94, 93, 77],
    FoodEmptyTrough: [91, 107, 123],
    FoodFilledTrough: [92, 108, 124],//cocho
    WaterEmptyTrough: [59, 75],
    WaterFilledTrough: [60, 76],
    commonSolids: [3, 15, 16, 29, 30, 31, 32, 44, 45, 46, 47, 48, 49, 50, 64, 66, 80, 96, 98, 110, 111, 112, 114, 126, 127, 128, 143, 144, 140, 141, 142, 143, 144, 157, 160, 158, 159], //houses trees, rocks
} as const;

