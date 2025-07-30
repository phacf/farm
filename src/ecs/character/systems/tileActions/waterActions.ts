import { seed, watered } from "@constants/itens/itens";
import { changeTile } from "utils/screen";

export function waterActions(x: number, y: number, tileId: number) { //entity to take equiped
    if (tileId === seed) changeTile(watered, x, y) //water
}

