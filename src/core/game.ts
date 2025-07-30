import { createPlayerEntity } from "@ecs/character/index"
import { CharacterDrawSystem } from "@ecs/character/systems/drawSystem"
import { CharacterMovementSystem } from "@ecs/character/systems/movementSystem"
import { CharacterTileInteractionSystem } from "@ecs/character/systems/tileInteractionSystem"
import { CharacterTimerSystem } from "@ecs/character/systems/timerSystem"
import { InputController } from "controllers/inputController"

export class Game {
    player = createPlayerEntity()
    input = new InputController()

    update() {
        //gameState = ingame
        CharacterMovementSystem(this.player, this.input)
        CharacterTimerSystem(this.player)
        CharacterTileInteractionSystem(this.player,this.input)
    }

    draw() {
        map()
        //ingame
        CharacterDrawSystem(this.player)

    }
}