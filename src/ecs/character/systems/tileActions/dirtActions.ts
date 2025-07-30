import { changeTile } from "utils/screen";

export function dirtActions(x: number, y: number, tileId?: number) { //entity to take equiped
    if (tileId === 0 || tileId === 2) changeTile(17, x, y) //dig

    // if grown take
    // else dig
}

