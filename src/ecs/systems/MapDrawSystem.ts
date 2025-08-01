import { cropsMap } from "@constants/itens/itens";
import { CropsComponent } from "@ecs/components/cropComponent";
import { Entity } from "@ecs/models/entity";
import { MapScreen } from "@tic/map/map";

export function MapDrawSystem(entity: Entity) {
    const crops = entity.get(CropsComponent)
    if (!crops) return

    for (let y = 0; y <= MapScreen.h; y+=8) {
        for (let x = 0; x <= MapScreen.w; x+=8) {
            const crop = crops.get(x, y);
            if (!crop) continue

            const plant = cropsMap[crop.seedType]
            mset(x, y, plant[crop.stage])
            print(crop.stage)

        }
    }
}




