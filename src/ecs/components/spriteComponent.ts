import { ISpriteComponent } from "@interfaces/ISpriteComponent";

export class SpriteComponent implements ISpriteComponent {
    id: number = 0;
    n: number = 0;
    colorKey?: number | undefined;
    flip?: number | undefined;
    h?: number | undefined;
    w?: number | undefined;
    interval?: number | undefined;
    rotate?: number | undefined;
    scale?: number | undefined;
    //spr(id, x, y, [colorkey=-1], [scale=1], [flip=0], [rotate=0], [w=1], [h=1])
    constructor(
        id = 0,
        n = 0,
        colorKey = -1,
        flip = 0,
        h = 1,
        w = 1,
        interval = 0,
        rotate = 0,
        scale = 1
    ) {
        this.colorKey = colorKey
        this.flip = flip
        this.id = id
        this.interval = interval
        this.n = n
        this.rotate = rotate
        this.scale = scale
        this.h = h
        this.w = w
    }
}