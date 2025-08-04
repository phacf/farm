import { cropsMap } from "@constants/itens/itens";
import { CropsComponent } from "@ecs/components/cropComponent";
import { Entity } from "@ecs/models/entity";
import { MapScreen } from "@tic/map/map";

export function MapDrawSystem(entity: Entity) {
    const crops = entity.get(CropsComponent);
    if (!crops) return;

    for (let y = 0; y <= MapScreen.h; y++) {
        for (let x = 0; x <= MapScreen.w; x++) {
            

            const crop = crops.get(x * 8, y * 8);
            if (!crop) continue;

            const plant = cropsMap[crop.seedType];
            mset(crop.location.x, crop.location.y, plant[crop.stage]);
        }
    }
}

