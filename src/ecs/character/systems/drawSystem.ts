import { PositionComponent } from "@ecs/components/positionComponent";
import { SpriteComponent } from "@ecs/components/spriteComponent";
import { TimerComponent } from "@ecs/components/timerComponent";
import { Entity } from "@ecs/models/entity";

export function CharacterDrawSystem(entity: Entity) {
    const pos = entity.get(PositionComponent)
    const sprite = entity.get(SpriteComponent)
    const t = entity.get(TimerComponent)

    if (!pos || !sprite || !t) return

    const id = sprite.id + (t.time/sprite.interval!) % sprite.n
        spr(id, pos.x, pos.y, sprite.colorKey)
}