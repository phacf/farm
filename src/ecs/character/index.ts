import { MapConfig } from "@constants/map/map";
import { TileCollisionComponent } from "@ecs/components/colisionComponent";
import { CropsComponent } from "@ecs/components/cropComponent";
import { DirectionComponent } from "@ecs/components/directionComponent";
import { GameStateComponent } from "@ecs/components/gameStateComponent";
import { InventoryComponent } from "@ecs/components/inventoryComponent";
import { PositionComponent } from "@ecs/components/positionComponent";
import { SizeComponent } from "@ecs/components/sizeComponent";
import { SpriteComponent } from "@ecs/components/spriteComponent";
import { TimerComponent } from "@ecs/components/timerComponent";
import { VelocityComponent } from "@ecs/components/velocityComponent";
import { Entity } from "@ecs/models/entity";

const { FoodEmptyTrough, FoodFilledTrough, WaterEmptyTrough, WaterFilledTrough, commonSolids, wall, water } = MapConfig

export function createPlayerEntity(): Entity {
    const entity = new Entity();
    entity.add(PositionComponent, { x: 0, y: 0 })
        .add(SizeComponent, { height: 7, width: 6 })
        .add(VelocityComponent, { dx: 0, dy: 0, speed: 1 })
        .add(TimerComponent, { time: 0 })
        .add(SpriteComponent, { id: 256, n: 2, interval: 20, colorKey: 0 })
        .add(CropsComponent, new CropsComponent())
        .add(GameStateComponent, { state: "inGame" })
        .add(InventoryComponent, new InventoryComponent())
        .add(TileCollisionComponent, {
            tiles: [
                ...FoodEmptyTrough,
                ...FoodFilledTrough,
                ...WaterEmptyTrough,
                ...WaterFilledTrough,
                ...commonSolids,
                ...wall,
                ...water
            ]
        })
        .add(DirectionComponent, { direction: 'down' })

    return entity
}