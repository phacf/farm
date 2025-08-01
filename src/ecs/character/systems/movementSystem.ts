import { TileCollisionComponent } from "@ecs/components/colisionComponent";
import { DirectionComponent } from "@ecs/components/directionComponent";
import { PositionComponent } from "@ecs/components/positionComponent";
import { SizeComponent } from "@ecs/components/sizeComponent";
import { VelocityComponent } from "@ecs/components/velocityComponent";
import { Entity } from "@ecs/models/entity";
import { InputController } from "controllers/inputController";
import { isColiding } from "utils/colision";

export function CharacterMovementSystem(entity: Entity, input: InputController) {
    const vel = entity.get(VelocityComponent)
    const pos = entity.get(PositionComponent)
    const col = entity.get(TileCollisionComponent)
    const size = entity.get(SizeComponent)
    const dir = entity.get(DirectionComponent)

    if (!vel || !pos || !col || !size || !dir) return

    vel.dx = 0;
    vel.dy = 0;

    if (input.isUp()) {
        vel.dy = -1
        dir.direction = 'up'
    }
    if (input.isDown()) {
        vel.dy = 1
        dir.direction = 'down'

    }
    if (input.isLeft()) {
        vel.dx = -1
        dir.direction = 'left'

    }
    if (input.isRight()) {
        vel.dx = 1
        dir.direction = 'right'

    }

    pos.x += vel.dx * vel.speed
    if (isColiding(pos.x, pos.y, size.width - 2, size.height - 2, col.tiles)) pos.x -= vel.dx * vel.speed
    pos.y += vel.dy * vel.speed
    if (isColiding(pos.x, pos.y, size.width - 2, size.height - 2, col.tiles)) pos.y -= vel.dy * vel.speed

}