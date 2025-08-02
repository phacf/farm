import { CropsComponent } from "@ecs/components/cropComponent"
import { Entity } from "@ecs/models/entity"


export function MapUpdateSystem(entity: Entity) {
    const field = entity.get(CropsComponent)
    if (!field) return
    for (let crop of field.crops) {

        if (crop.time > 0) {
            crop.time--
        } else {
            crop.time = crop.stageTime
            if (crop.stage === "grown") crop.time = 0
            if (crop.stage === "plant") crop.stage = "grown"
            if (crop.stage === "watered")crop.stage = "plant"
        }

    }
}