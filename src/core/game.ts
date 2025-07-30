import { createPlayerEntity } from "@ecs/character/index"
import { CharacterDrawSystem } from "@ecs/character/systems/drawSystem"
import { InputSystem } from "@ecs/character/systems/inputSystem"
import { CharacterMovementSystem } from "@ecs/character/systems/movementSystem"
import { CharacterTileInteractionSystem } from "@ecs/character/systems/tileInteractionSystem"
import { CharacterTimerSystem } from "@ecs/character/systems/timerSystem"
import { GameStateComponent } from "@ecs/components/gameStateComponent"
import { Entity } from "@ecs/models/entity"
import { MapDrawSystem } from "@ecs/systems/MapDrawSystem"
import { MapUpdateSystem } from "@ecs/systems/MapUpdateSystem"
import { InputController } from "controllers/inputController"

export class Game {
    player: Entity
    input: InputController

    constructor() {
        this.player = createPlayerEntity();
        this.input = new InputController();
    }

    update() {
        const gameState = this.player.get(GameStateComponent);
        if (!gameState) return;

        InputSystem(this.player, this.input)

        switch (gameState.state) {
            case "inGame":
                this.updateInGame();
                break;
            case "openInventory":
                // lógica para inventory
                break;
            case "start":
                // lógica para start
                break;
            case "gameOver":
                // lógica para game over
                break;
        }
    }

    // draw() {
    //     const gameState = this.player.get(GameStateComponent);
    //     if (!gameState) return;

    //     switch (gameState.state) {
    //         case "inGame":
    //             this.drawIngame();
    //             break;
    //         case "openInventory":
    //             // lógica para inventory
    //             break;
    //         case "start":
    //             // lógica para start
    //             break;
    //         case "gameOver":
    //             // lógica para game over
    //             break;
    //     }
    // }

    updateInGame() {
        CharacterMovementSystem(this.player, this.input)
        CharacterTimerSystem(this.player)
        CharacterTileInteractionSystem(this.player, this.input)
        MapUpdateSystem(this.player)
    }

    draw() {
        map()
        MapDrawSystem(this.player)
        CharacterDrawSystem(this.player)
    }
}