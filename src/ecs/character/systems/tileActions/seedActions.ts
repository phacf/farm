import { changeTile } from "utils/screen";

export function seedActions(x:number,y:number, tileId:number){ //entity to take equiped
    if(tileId === 17) changeTile(18,x,y) //sow
    // if grown take
    // else dig
}

