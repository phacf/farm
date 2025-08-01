import { PositionComponent } from "@ecs/components/positionComponent";
import { Entity } from "@ecs/models/entity";
import { InputController } from "controllers/inputController";
import { onTile } from "utils/screen";
import { dirtActions } from "./tileActions/dirtActions";
import { waterActions } from "./tileActions/waterActions";
import { InventoryComponent } from "@ecs/components/inventoryComponent";
import { seedActions } from "./tileActions/seedActions";
import { CropsComponent } from "@ecs/components/cropComponent";
import { ISeedItem } from "@interfaces/IInventoryComponent";
import { IcropTile } from "@interfaces/IcropComponent";
import { TimerComponent } from "@ecs/components/timerComponent";
import { MapConfig } from "@constants/map/map";
import { getTileAim } from "utils/movement";
import { SizeComponent } from "@ecs/components/sizeComponent";
import { DirectionComponent } from "@ecs/components/directionComponent";

export function CharacterTileInteractionSystem(entity: Entity, input: InputController) {
    const pos = entity.get(PositionComponent)
    const inventory = entity.get(InventoryComponent)
    const crop = entity.get(CropsComponent)
    const t = entity.get(TimerComponent)
    const size = entity.get(SizeComponent)
    const d = entity.get(DirectionComponent)

    if (!pos || !inventory || !crop || !t || !size || !d) return

    if (input.pressA()) {
        const tile = onTile(pos.x, pos.y)
        if (inventory.equiped?.type === "hoe") dirtActions(pos.x, pos.y, tile)
        if (inventory.equiped?.type === "seed") {
            seedActions(pos.x, pos.y, tile)
            inventory.equiped.amount--
            crop.add(toCrop(inventory.equiped, pos.x, pos.y, t.time))
        }
        if (inventory.equiped?.type === "can") {
            inventory.water && waterActions(pos.x, pos.y, tile)
            inventory.water--
            if (MapConfig.water.includes(getTileAim(pos.x, pos.y, size.width, size.height, d.direction))) inventory.water = 3
        }
    }
}

function toCrop(seed: ISeedItem, x: number, y: number, time: number): IcropTile {
    return {
        location: { x, y },
        seedType: seed.seedType,
        stage: seed.stage,
        stageTime: seed.stageTime,
        time
    }
}