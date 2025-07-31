import { PositionComponent } from "@ecs/components/positionComponent";
import { Entity } from "@ecs/models/entity";
import { InputController } from "controllers/inputController";
import { onTile } from "utils/screen";
import { dirtActions } from "./tileActions/dirtActions";
import { waterActions } from "./tileActions/waterActions";
import { InventoryComponent } from "@ecs/components/inventoryComponent";
import { seedActions } from "./tileActions/seedActions";

export function CharacterTileInteractionSystem(entity: Entity, input: InputController) {
    const pos = entity.get(PositionComponent)
    const inventory = entity.get(InventoryComponent)

    if (!pos || !inventory) return

    if (input.pressA()) {
        const tile = onTile(pos.x, pos.y)
        if (inventory.equiped?.type === "hoe") dirtActions(pos.x, pos.y, tile)
        if (inventory.equiped?.type === "seed") seedActions(pos.x, pos.y, tile)
        if (inventory.equiped?.type === "can") waterActions(pos.x, pos.y, tile)
    }
}