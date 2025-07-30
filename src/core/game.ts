import { createPlayerEntity } from "@ecs/character/index"
import { CharacterDrawSystem } from "@ecs/character/systems/drawSystem"
import { CharacterMovementSystem } from "@ecs/character/systems/movementSystem"
import { CharacterTileInteractionSystem } from "@ecs/character/systems/tileInteractionSystem"
import { CharacterTimerSystem } from "@ecs/character/systems/timerSystem"
import { MapDrawSystem } from "@ecs/systems/MapDrawSystem"
import { MapUpdateSystem } from "@ecs/systems/MapUpdateSystem"
import { InputController } from "controllers/inputController"

export class Game {
    player = createPlayerEntity()
    input = new InputController()

    update() {
        //gameState = ingame
        CharacterMovementSystem(this.player, this.input)
        CharacterTimerSystem(this.player)
        CharacterTileInteractionSystem(this.player,this.input)
        MapUpdateSystem(this.player)
    }

    draw() {
        map()
        //ingame
        MapDrawSystem(this.player)
        CharacterDrawSystem(this.player)

    }
}