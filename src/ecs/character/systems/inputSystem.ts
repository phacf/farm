import { GameStateComponent } from "@ecs/components/gameStateComponent";
import { InventoryComponent } from "@ecs/components/inventoryComponent";
import { Entity } from "@ecs/models/entity";
import { InputController } from "controllers/inputController";

export function InputSystem(entity: Entity, input: InputController) {
    const inventory = entity.get(InventoryComponent)
    const gameState = entity.get(GameStateComponent)

    if (!inventory || !gameState) return
    if (input.pressB()) {
        gameState.state = gameState.state === "inGame" ? 'openInventory' : 'inGame'
    }
}