import { GameStateComponent } from "@ecs/components/gameStateComponent";
import { InventoryComponent } from "@ecs/components/inventoryComponent";
import { Entity } from "@ecs/models/entity";
import { IInventoryItemType } from "@interfaces/IInventoryComponent";

export function inventoryDrawSystem(entity: Entity) {
    const inventory = entity.get(InventoryComponent)
    const gameState = entity.get(GameStateComponent)

    if (!inventory || !gameState) return

    dWater(inventory.water)
    dEquip(inventory.equiped, inventory.gold)


    if (gameState.state !== "openInventory") return
    rect(1 * 8, 1 * 8, (inventory.size * 8) + 2, (1 * 8) + 2, 0)// draw 
    const x = (inventory.select.x + 1) * 8
    const y = (inventory.select.y + 1) * 8
    spr(263, x + 1, y + 1, 0)//selector


    for (let i = 0; i < inventory.size; i++) {
        const item = inventory.itens[i]

        item && spr(item.ItemSprite, (i + 1) + 1 * 8, 1 + 1 * 8, 0)//item


    }

}

function dEquip(equip?: IInventoryItemType, money: number) {
    //equiped
    rect(27 * 8, 0, 8, 8, 0)
    equip && spr(equip.ItemSprite, 27 * 8, 0, 0)
    //money
    rect(25 * 8, 0, 8, 8, 0)
    spr(277, 25 * 8, 0)
    print(money, (26 * 8) + 1, 1, 1, 0)

}

function dWater(water: number) {
    spr(259, 29 * 8, 0, 0)//draw water

    let wy = 1
    if (water) {
        for (let i = 0; i < water; i++) {
            spr(260, 29 * 8, wy * 8, 0)
            wy++
        }
    }

}