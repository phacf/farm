import { CropsComponent } from "@ecs/components/cropComponent"
import { Entity } from "@ecs/models/entity"


export function MapUpdateSystem(entity: Entity) {
    const field = entity.get(CropsComponent);
    if (!field) return;

    for (let crop of field.crops) {
        if (crop.stage === "grown") continue;

        if (crop.time > 0) {
            crop.time--;
        } else {
            // Só progride se está na fase correta
            if (crop.stage === "watered") {
                crop.stage = "plant";
                crop.time = crop.stageTime;
            } else if (crop.stage === "plant") {
                crop.stage = "grown";
                crop.time = 0;
            }
        }
    }
}
