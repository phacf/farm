import { ISizeComponent } from "@interfaces/ISizeComponent";

export class SizeComponent implements ISizeComponent {
    height: number;
    width: number;
    constructor(width = 0, height = 0) {
        this.width = width;
        this.height = height;
    }
}