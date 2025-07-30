import { PositionComponent } from "@ecs/components/positionComponent";
import { VelocityComponent } from "@ecs/components/velocityComponent";
import { Entity } from "@ecs/models/entity";
import { InputController } from "controllers/inputController";

export function CharacterMovementSystem(entity: Entity, input: InputController) {
    const vel = entity.get(VelocityComponent)
    const pos = entity.get(PositionComponent)
    if (!vel || !pos) return

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
    pos.y += vel.dy * vel.speed

}