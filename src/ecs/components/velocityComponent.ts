import { IVelocityComponent } from "@interfaces/IVelocityComponent";

export class VelocityComponent implements IVelocityComponent {
    dx: number;
    dy: number;
    speed: number;
    constructor(dx = 0, dy = 0, speed = 0){
        this.dx = dx;
        this.dy = dy;
        this.speed = speed;
    }
}