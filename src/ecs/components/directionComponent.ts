import { DirectionType } from "@constants/sprites/entities";
import { IDirectionComponent } from "@interfaces/IDirectionComponent";

export class DirectionComponent implements IDirectionComponent {
    direction: DirectionType;
    constructor(direction: DirectionType = 'down') {
        this.direction = direction
    }
}