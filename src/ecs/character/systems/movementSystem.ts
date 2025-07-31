import { TileCollisionComponent } from "@ecs/components/colisionComponent";
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
    if (!vel || !pos || !col || !size) return

    vel.dx = 0;
    vel.dy = 0;

    if (input.isUp()) {
        vel.dy = -1
    }
    if (input.isDown()) {
        vel.dy = 1
    }
    if (input.isLeft()) {
        vel.dx = -1
    }
    if (input.isRight()) {
        vel.dx = 1
    }

    pos.x += vel.dx * vel.speed
    if (isColiding(pos.x, pos.y, size.width - 2, size.height - 2, col.tiles)) pos.x -= vel.dx * vel.speed
    pos.y += vel.dy * vel.speed
    if (isColiding(pos.x, pos.y, size.width - 2, size.height - 2, col.tiles)) pos.y -= vel.dy * vel.speed

}