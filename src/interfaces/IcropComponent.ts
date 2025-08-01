import { IPositionComponent } from "./IPositionComponent";

export interface IcropComponent {
    crops: IcropTile[];
}

export interface IcropTile {
    seedType: SeedType;
    stage: PlantStage;
    time: number;
    location: IPositionComponent;
    stageTime: number;
}

export type SeedType = 'carrot'
    | 'tomato'
    | 'grape'
    | 'beet'
    | 'pupkin'
    | 'corn'

export type PlantStage = 'seed'
    | 'watered'
    | 'plant'
    | 'grown'

export type CropMap = {
  [K in SeedType]: {
    [S in PlantStage]: number
  }
}
