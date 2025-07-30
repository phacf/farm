import { dirt, grass, soil } from "@constants/itens/itens";
import { changeTile } from "utils/screen";

export function dirtActions(x: number, y: number, tileId?: number) { //entity to take equiped
    if (tileId === soil || tileId === grass) changeTile(dirt, x, y) //dig

    // if grown take
    // else dig
}

