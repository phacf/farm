import { GameStateType } from "@constants/state/state";

export class GameStateComponent implements IGamestateComponent {
    state: GameStateType;
    constructor(state: GameStateType){
        this.state = state;
    }
}