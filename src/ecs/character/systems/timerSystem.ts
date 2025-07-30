import { TimerComponent } from "@ecs/components/timerComponent";
import { Entity } from "@ecs/models/entity";

export function CharacterTimerSystem(entity: Entity) {
    const t = entity.get(TimerComponent)
    if (!t) return
    t.time ++
}