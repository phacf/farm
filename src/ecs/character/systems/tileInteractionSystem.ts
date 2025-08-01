import { PositionComponent } from "@ecs/components/positionComponent";
import { Entity } from "@ecs/models/entity";
import { InputController } from "controllers/inputController";
import { onTile } from "utils/screen";
import { dirtActions } from "./tileActions/dirtActions";
import { InventoryComponent } from "@ecs/components/inventoryComponent";
import { CropsComponent } from "@ecs/components/cropComponent";
import { ISeedItem } from "@interfaces/IInventoryComponent";
import { IcropTile } from "@interfaces/IcropComponent";
import { MapConfig } from "@constants/map/map";
import { getTileAim } from "utils/movement";
import { SizeComponent } from "@ecs/components/sizeComponent";
import { DirectionComponent } from "@ecs/components/directionComponent";
import { dirt } from "@constants/itens/itens";

export function CharacterTileInteractionSystem(entity: Entity, input: InputController) {
    const pos = entity.get(PositionComponent)
    const inventory = entity.get(InventoryComponent)
    const crop = entity.get(CropsComponent)
    const size = entity.get(SizeComponent)
    const d = entity.get(DirectionComponent)

    if (!pos || !inventory || !crop || !size || !d) return

    if (input.pressA()) {
        const tile = onTile(pos.x, pos.y)
        if (inventory.equiped?.type === "hoe") dirtActions(pos.x, pos.y, tile)

        if (inventory.equiped?.type === "seed") {
            if (tile === dirt) {
                crop.add(toCrop(inventory.equiped, pos.x, pos.y))
                inventory.equiped.amount--
            }
        }
        if (inventory.equiped?.type === "can") {
            const plant = crop.get(pos.x, pos.y)

            if (inventory.water > 0 && plant?.stage === "seed") {
                if (plant) {
                    plant.stage = "watered"
                }
                inventory.water--
            }

            if (MapConfig.water.includes(getTileAim(pos.x, pos.y, size.width, size.height, d.direction))) inventory.water = 3
        }
    }
}

function toCrop(seed: ISeedItem, x: number, y: number): IcropTile {
    return {
        location: {
            x,
            y
        },
        seedType: seed.seedType,
        stage: seed.stage,
        stageTime: seed.stageTime,
        time: seed.stageTime
    }
}