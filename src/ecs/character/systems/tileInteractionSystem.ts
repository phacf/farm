import { PositionComponent } from "@ecs/components/positionComponent";
import { Entity } from "@ecs/models/entity";
import { InputController } from "controllers/inputController";
import { onTile } from "utils/screen";
import { dirtActions } from "./tileActions/dirtActions";

export function CharacterTileInteractionSystem(entity: Entity, input: InputController) {
    const pos = entity.get(PositionComponent)
    if (!pos) return
    if (input.pressA()) {
        const tile = onTile(pos.x, pos.y)
        dirtActions(pos.x, pos.y)
    }
}