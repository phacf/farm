import { changeTile } from "utils/screen";

export function waterActions(x: number, y: number, tileId: number) { //entity to take equiped
    if (tileId === 18) changeTile(19, x, y) //water
}

