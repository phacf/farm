
// title:   game title
// author:  game developer, email, etc.
// desc:    short description
// site:    website link
// license: MIT License (change this to your license of choice)
// version: 0.1
// script:  js
// title:   game title
// author:  game developer
// desc:    farm game with ECS
// script:  js
class CropsComponent {
  constructor(crops = []) {
    this.crops = crops;
  }
  add(crop) {
    this.crops.push(crop);
  }
  remove(x, y) {
    this.crops = this.crops.filter((c) => c.location.x !== x && c.location.y !== y);
  }
  get(x, y) {
    return this.crops.find((c) => c.location.x === x && c.location.y === y);
  }
}
class GameStateComponent {
  constructor(state) {
    this.state = state;
  }
}
const soil = 0;
const grass = 1;
const dirt = 17;
const seed = 18;
const watered = 19;
const cropsMap = {
  beet: {
    seed,
    watered,
    plant: 33,
    grown: 82
  },
  carrot: {
    seed,
    watered,
    plant: 33,
    grown: 34
  },
  corn: {
    seed,
    watered,
    plant: 33,
    grown: 114
  },
  grape: {
    seed,
    watered,
    plant: 49,
    grown: 66
  },
  pupkin: {
    seed,
    watered,
    plant: 33,
    grown: 98
  },
  tomato: {
    seed,
    watered,
    plant: 49,
    grown: 50
  }
};
const waterCan = {
  label: "water can",
  type: "can",
  ItemSprite: 261
};
class InventoryComponent {
  constructor(gold = 0, water = 3, itens = [waterCan], size = 10) {
    this.select = { x: 0, y: 0 };
    this.gold = gold;
    this.water = water;
    this.itens = itens;
    this.size = size;
  }
  equip(item) {
    this.equiped = item;
  }
  unequip() {
    this.equiped = void 0;
  }
  add(item) {
    if (this.itens.length === this.size) return;
    this.itens.push(item);
  }
}
class PositionComponent {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }
}
class SpriteComponent {
  //spr(id, x, y, [colorkey=-1], [scale=1], [flip=0], [rotate=0], [w=1], [h=1])
  constructor(id = 0, n = 0, colorKey = -1, flip = 0, h = 1, w = 1, interval = 0, rotate = 0, scale = 1) {
    this.id = 0;
    this.n = 0;
    this.colorKey = colorKey;
    this.flip = flip;
    this.id = id;
    this.interval = interval;
    this.n = n;
    this.rotate = rotate;
    this.scale = scale;
    this.h = h;
    this.w = w;
  }
}
class TimerComponent {
  constructor() {
    this.time = 0;
  }
}
class VelocityComponent {
  constructor(dx = 0, dy = 0, speed = 0) {
    this.dx = dx;
    this.dy = dy;
    this.speed = speed;
  }
}
class IdController {
  constructor() {
    this.ids = [];
  }
  getNewId() {
    let nextId = 0;
    if (this.ids.length) nextId = this.ids[this.ids.length - 1];
    nextId++;
    this.ids.push(nextId);
    return nextId;
  }
  hasId(id) {
    return this.ids.some(id);
  }
  removeId(id) {
    this.ids = this.ids.filter((i) => i !== id);
  }
}
class Entity {
  constructor() {
    this.idController = new IdController();
    this.components = /* @__PURE__ */ new Map();
    this.id = this.idController.getNewId();
  }
  add(cls2, instance) {
    this.components.set(cls2, instance);
    return this;
  }
  get(cls2) {
    return this.components.get(cls2);
  }
  has(cls2) {
    return this.components.has(cls2);
  }
}
function createPlayerEntity() {
  const entity = new Entity();
  entity.add(PositionComponent, { x: 0, y: 0 }).add(VelocityComponent, { dx: 0, dy: 0, speed: 1 }).add(TimerComponent, { time: 0 }).add(SpriteComponent, { id: 256, n: 2, interval: 20, colorKey: 0 }).add(CropsComponent, new CropsComponent()).add(GameStateComponent, { state: "inGame" }).add(InventoryComponent, new InventoryComponent());
  return entity;
}
function CharacterDrawSystem(entity) {
  const pos = entity.get(PositionComponent);
  const sprite = entity.get(SpriteComponent);
  const t = entity.get(TimerComponent);
  if (!pos || !sprite || !t) return;
  const id = sprite.id + t.time / sprite.interval % sprite.n;
  spr(id, pos.x, pos.y, sprite.colorKey);
}
function InputSystem(entity, input) {
  const inventory = entity.get(InventoryComponent);
  const gameState = entity.get(GameStateComponent);
  if (!inventory || !gameState) return;
  if (input.pressB()) {
    gameState.state = gameState.state === "inGame" ? "openInventory" : "inGame";
  }
}
function inventoryDrawSystem(entity) {
  const inventory = entity.get(InventoryComponent);
  const gameState = entity.get(GameStateComponent);
  if (!inventory || !gameState) return;
  dWater(inventory.water);
  dEquip(inventory.equiped, inventory.gold);
  if (gameState.state !== "openInventory") return;
  rect(1 * 8, 1 * 8, inventory.size * 8 + 2, 1 * 8 + 2, 0);
  const x = (inventory.select.x + 1) * 8;
  const y = (inventory.select.y + 1) * 8;
  spr(263, x + 1, y + 1, 0);
  for (let i = 0; i < inventory.size; i++) {
    const item = inventory.itens[i];
    item && spr(item.ItemSprite, i + 1 + 1 * 8, 1 + 1 * 8, 0);
  }
}
function dEquip(equip, money) {
  rect(27 * 8, 0, 8, 8, 0);
  equip && spr(equip.ItemSprite, 27 * 8, 0, 0);
  rect(25 * 8, 0, 8, 8, 0);
  spr(277, 25 * 8, 0);
  print(money, 26 * 8 + 1, 1, 1, 0);
}
function dWater(water) {
  spr(259, 29 * 8, 0, 0);
  let wy = 1;
  if (water) {
    for (let i = 0; i < water; i++) {
      spr(260, 29 * 8, wy * 8, 0);
      wy++;
    }
  }
}
function InventoryUpdateSystem(entity, input) {
  const inventory = entity.get(InventoryComponent);
  if (!inventory) return;
  if (input.pressRight()) {
    inventory.select.x++;
  } else if (input.pressLeft()) {
    inventory.select.x--;
  }
  if (inventory.select.x >= inventory.size) {
    inventory.select.x = 0;
  } else if (inventory.select.x < 0) {
    inventory.select.x = inventory.size - 1;
  }
  if (input.pressA()) {
    const selectedItem = inventory.itens[inventory.select.x];
    if (selectedItem) {
      inventory.equip(selectedItem);
    }
  }
}
function CharacterMovementSystem(entity, input) {
  const vel = entity.get(VelocityComponent);
  const pos = entity.get(PositionComponent);
  if (!vel || !pos) return;
  vel.dx = 0;
  vel.dy = 0;
  if (input.isUp()) {
    vel.dy = -1;
  }
  if (input.isDown()) {
    vel.dy = 1;
  }
  if (input.isLeft()) {
    vel.dx = -1;
  }
  if (input.isRight()) {
    vel.dx = 1;
  }
  pos.x += vel.dx * vel.speed;
  pos.y += vel.dy * vel.speed;
}
function onTile(px, py) {
  let cx = Math.floor((px + 4) / 8);
  let cy = Math.floor((py + 4) / 8);
  return mget(cx, cy);
}
function changeTile(spriteId, x, y) {
  mset(Math.floor((x + 4) / 8), Math.floor((y + 4) / 8), spriteId);
}
function dirtActions(x, y, tileId) {
  if (tileId === soil || tileId === grass) changeTile(dirt, x, y);
}
function waterActions(x, y, tileId) {
  if (tileId === seed) changeTile(watered, x, y);
}
function CharacterTileInteractionSystem(entity, input) {
  const pos = entity.get(PositionComponent);
  if (!pos) return;
  if (input.pressA()) {
    const tile = onTile(pos.x, pos.y);
    dirtActions(pos.x, pos.y, tile);
    waterActions(pos.x, pos.y, tile);
  }
}
function CharacterTimerSystem(entity) {
  const t = entity.get(TimerComponent);
  if (!t) return;
  t.time++;
}
const MapScreen = {
  w: 29,
  h: 16
};
function MapDrawSystem(entity) {
  const crops = entity.get(CropsComponent);
  if (!crops) return;
  for (let y = 0; y <= MapScreen.h; y++) {
    for (let x = 0; x <= MapScreen.w; x++) {
      const crop = crops.get(x, y);
      if (!crop) continue;
      const plant = cropsMap[crop.seedType];
      mset(x, y, plant[crop.stage]);
    }
  }
}
function MapUpdateSystem(entity) {
  const field = entity.get(CropsComponent);
  if (!field) return;
  for (let crop of field.crops) {
    if (crop.time > 0) {
      crop.time--;
    } else if (crop.stage === "plant") {
      crop.stage = "grown";
    } else if (crop.stage === "watered") {
      crop.stage = "plant";
      crop.time = crop.stageTime;
    }
  }
}
const Keypad = {
  // Player 1 (ID base: 0)
  up: 0,
  down: 1,
  left: 2,
  right: 3,
  a: 4,
  //A z
  b: 5,
  //B x
  x: 6,
  //X a
  y: 7
};
class InputController {
  isUp() {
    return btn(Keypad.up);
  }
  isDown() {
    return btn(Keypad.down);
  }
  isLeft() {
    return btn(Keypad.left);
  }
  isRight() {
    return btn(Keypad.right);
  }
  isA() {
    return btn(Keypad.a);
  }
  isB() {
    return btn(Keypad.b);
  }
  isX() {
    return btn(Keypad.x);
  }
  isY() {
    return btn(Keypad.y);
  }
  pressUp() {
    return btnp(Keypad.up);
  }
  pressDown() {
    return btnp(Keypad.down);
  }
  pressLeft() {
    return btnp(Keypad.left);
  }
  pressRight() {
    return btnp(Keypad.right);
  }
  pressA() {
    return btnp(Keypad.a);
  }
  pressB() {
    return btnp(Keypad.b);
  }
  pressX() {
    return btnp(Keypad.x);
  }
  pressY() {
    return btnp(Keypad.y);
  }
}
class Game {
  constructor() {
    this.player = createPlayerEntity();
    this.input = new InputController();
  }
  update() {
    const gameState = this.player.get(GameStateComponent);
    if (!gameState) return;
    InputSystem(this.player, this.input);
    switch (gameState.state) {
      case "inGame":
        this.updateInGame();
        break;
      case "openInventory":
        InventoryUpdateSystem(this.player, this.input);
        break;
    }
  }
  // draw() {
  //     const gameState = this.player.get(GameStateComponent);
  //     if (!gameState) return;
  //     switch (gameState.state) {
  //         case "inGame":
  //             this.drawIngame();
  //             break;
  //         case "openInventory":
  //             // lógica para inventory
  //             break;
  //         case "start":
  //             // lógica para start
  //             break;
  //         case "gameOver":
  //             // lógica para game over
  //             break;
  //     }
  // }
  updateInGame() {
    CharacterMovementSystem(this.player, this.input);
    CharacterTimerSystem(this.player);
    CharacterTileInteractionSystem(this.player, this.input);
    MapUpdateSystem(this.player);
  }
  draw() {
    map();
    MapDrawSystem(this.player);
    CharacterDrawSystem(this.player);
    inventoryDrawSystem(this.player);
  }
}
const game = new Game();
function TIC() {
  cls(3);
  game.update();
  game.draw();
}
globalThis.TIC = TIC;
