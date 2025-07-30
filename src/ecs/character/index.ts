import { CropsComponent } from "@ecs/components/cropComponent";
import { GameStateComponent } from "@ecs/components/gameStateComponent";
import { PositionComponent } from "@ecs/components/positionComponent";
import { SpriteComponent } from "@ecs/components/spriteComponent";
import { TimerComponent } from "@ecs/components/timerComponent";
import { VelocityComponent } from "@ecs/components/velocityComponent";
import { Entity } from "@ecs/models/entity";



export function createPlayerEntity(): Entity {
    const entity = new Entity();
    entity.add(PositionComponent)
        .add(VelocityComponent, { dx: 0, dy: 0, speed: 1 })
        .add(TimerComponent)
        .add(SpriteComponent, { id: 256, n: 2, interval: 20, colorKey: 0 })
        .add(CropsComponent)
        .add(GameStateComponent)




    return entity
}