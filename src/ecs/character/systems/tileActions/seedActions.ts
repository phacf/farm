import { dirt, seed } from "@constants/itens/itens";
import { changeTile } from "utils/screen";

export function seedActions(x:number,y:number, tileId:number){ //entity to take equiped
    if(tileId === dirt) changeTile(seed,x,y) //sow
    // if grown take
    // else dig
}

