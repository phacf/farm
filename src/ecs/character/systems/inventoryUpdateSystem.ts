import { InventoryComponent } from "@ecs/components/inventoryComponent";
import { Entity } from "@ecs/models/entity";
import { InputController } from "controllers/inputController";

export function InventoryUpdateSystem(entity: Entity, input: InputController) {
  const inventory = entity.get(InventoryComponent);
  if (!inventory) return;

  // Atualiza seleção com botões
  if (input.pressRight()) {
    inventory.select.x++;
  } else if (input.pressLeft()) {
    inventory.select.x--;
  }

  // Corrige overflow e underflow
  if (inventory.select.x >= inventory.size) {
    inventory.select.x = 0; // volta ao início
  } else if (inventory.select.x < 0) {
    inventory.select.x = inventory.size - 1; // vai para o fim
  }

  // Equipar item ao pressionar A
  if (input.pressA()) {
    const selectedItem = inventory.itens[inventory.select.x];
    if (selectedItem) {
      inventory.equip(selectedItem);
    }
  }
}
