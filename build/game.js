
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
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
const MapConfig = {
  water: [4, 5, 6],
  wall: [20, 36, 61, 62, 63, 79, 95, 94, 93, 77],
  FoodEmptyTrough: [91, 107, 123],
  FoodFilledTrough: [92, 108, 124],
  //cocho
  WaterEmptyTrough: [59, 75],
  WaterFilledTrough: [60, 76],
  commonSolids: [3, 15, 16, 29, 30, 31, 32, 44, 45, 46, 47, 48, 49, 50, 64, 66, 80, 96, 98, 110, 111, 112, 114, 126, 127, 128, 143, 144, 140, 141, 142, 143, 144, 157, 160, 158, 159]
  //houses trees, rocks
};
class TileCollisionComponent {
  constructor(tiles = []) {
    this.tiles = tiles;
  }
}
class CropsComponent {
  constructor(crops = []) {
    this.crops = crops;
  }
  toTileCoords(x, y) {
    return {
      x: Math.floor((x + 4) / 8),
      y: Math.floor((y + 4) / 8)
    };
  }
  add(crop) {
    const { x, y } = this.toTileCoords(crop.location.x, crop.location.y);
    const location = { x, y };
    this.crops.push(__spreadProps(__spreadValues({}, crop), { location }));
  }
  remove(x, y) {
    this.crops = this.crops.filter((c) => c.location.x !== x && c.location.y !== y);
  }
  get(x, y) {
    const { x: tilex, y: tiley } = this.toTileCoords(x, y);
    return this.crops.find((c) => c.location.x === tilex && c.location.y === tiley);
  }
}
class DirectionComponent {
  constructor(direction = "down") {
    this.direction = direction;
  }
}
class GameStateComponent {
  constructor(state) {
    this.state = state;
  }
}
const soil = 0;
const grass = 2;
const dirt = 17;
const seed = 18;
const watered = 19;
const amount = 9;
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
const hoe = {
  label: "Hoe",
  type: "hoe",
  ItemSprite: 262
};
const waterCan = {
  label: "water can",
  type: "can",
  ItemSprite: 261
};
const carrotSeed = {
  type: "seed",
  ItemSprite: 265,
  label: "carrot seed",
  seedType: "carrot",
  stageTime: 600,
  stage: "seed",
  amount
};
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
class InventoryComponent {
  constructor(gold = 0, water2 = 3, itens = [], size = 10) {
    this.idController = new IdController();
    this.select = { x: 0, y: 0 };
    this.gold = gold;
    this.water = water2;
    this.itens = itens;
    this.size = size;
    this.add(hoe);
    this.add(waterCan);
    this.add(carrotSeed);
  }
  equip(item) {
    if (this.equiped) this.add(this.equiped);
    this.equiped = item;
    this.remove(item);
  }
  unequip() {
    this.equiped = void 0;
  }
  add(item) {
    if (this.itens.length === this.size) return;
    if (!item.id) {
      this.itens.push(__spreadProps(__spreadValues({}, item), { id: this.idController.getNewId() }));
      return;
    }
    this.itens.push(item);
  }
  remove(item) {
    this.itens = this.itens.filter((i) => i.id !== item.id);
  }
}
class PositionComponent {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }
}
class SizeComponent {
  constructor(width = 0, height = 0) {
    this.width = width;
    this.height = height;
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
const { FoodEmptyTrough, FoodFilledTrough, WaterEmptyTrough, WaterFilledTrough, commonSolids, wall, water } = MapConfig;
function createPlayerEntity() {
  const entity = new Entity();
  entity.add(PositionComponent, { x: 0, y: 0 }).add(SizeComponent, { height: 7, width: 6 }).add(VelocityComponent, { dx: 0, dy: 0, speed: 1 }).add(TimerComponent, { time: 0 }).add(SpriteComponent, { id: 256, n: 2, interval: 20, colorKey: 0 }).add(CropsComponent, new CropsComponent()).add(GameStateComponent, { state: "inGame" }).add(InventoryComponent, new InventoryComponent()).add(TileCollisionComponent, {
    tiles: [
      ...FoodEmptyTrough,
      ...FoodFilledTrough,
      ...WaterEmptyTrough,
      ...WaterFilledTrough,
      ...commonSolids,
      ...wall,
      ...water
    ]
  }).add(DirectionComponent, { direction: "down" });
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
    const x2 = (i + 1) * 8;
    item && spr(item.ItemSprite, x2 + 1, 1 + 1 * 8, 0);
  }
}
function dEquip(equip, money) {
  rect(27 * 8 + 3, 0, 8, 8, 0);
  equip && spr(equip.ItemSprite, 27 * 8 + 3, 0, 0);
  rect(25 * 8, 0, 8, 8, 0);
  spr(277, 25 * 8, 0);
  print(money, 26 * 8 + 1, 1, 1, 0);
}
function dWater(water2) {
  spr(259, 29 * 8, 0, 0);
  let wy = 1;
  if (water2) {
    for (let i = 0; i < water2; i++) {
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
function detectTile(px, py, set) {
  let cx = Math.floor(px / 8);
  let cy = Math.floor(py / 8);
  let tile = mget(cx, cy);
  return set.includes(tile);
}
function onTile(px, py) {
  let cx = Math.floor((px + 4) / 8);
  let cy = Math.floor((py + 4) / 8);
  return mget(cx, cy);
}
function changeTile(spriteId, x, y) {
  mset(Math.floor((x + 4) / 8), Math.floor((y + 4) / 8), spriteId);
}
function isColiding(x, y, w, h, set) {
  return detectTile(x, y, set) || // canto superior esquerdo
  detectTile(x + w - 1, y, set) || // superior direito
  detectTile(x, y + h - 1, set) || // inferior esquerdo
  detectTile(x + w - 1, y + h - 1, set);
}
function CharacterMovementSystem(entity, input) {
  const vel = entity.get(VelocityComponent);
  const pos = entity.get(PositionComponent);
  const col = entity.get(TileCollisionComponent);
  const size = entity.get(SizeComponent);
  const dir = entity.get(DirectionComponent);
  if (!vel || !pos || !col || !size || !dir) return;
  vel.dx = 0;
  vel.dy = 0;
  if (input.isUp()) {
    vel.dy = -1;
    dir.direction = "up";
  }
  if (input.isDown()) {
    vel.dy = 1;
    dir.direction = "down";
  }
  if (input.isLeft()) {
    vel.dx = -1;
    dir.direction = "left";
  }
  if (input.isRight()) {
    vel.dx = 1;
    dir.direction = "right";
  }
  pos.x += vel.dx * vel.speed;
  if (isColiding(pos.x, pos.y, size.width - 2, size.height - 2, col.tiles)) pos.x -= vel.dx * vel.speed;
  pos.y += vel.dy * vel.speed;
  if (isColiding(pos.x, pos.y, size.width - 2, size.height - 2, col.tiles)) pos.y -= vel.dy * vel.speed;
}
function dirtActions(x, y, tileId) {
  if (tileId === soil || tileId === grass) changeTile(dirt, x, y);
}
function getTileAim(x, y, w, h, dir) {
  let tile = 0;
  if (dir === "up") {
    tile = mget(
      Math.floor((x + w / 2) / 8),
      Math.floor((y - h / 2) / 8)
    );
  } else if (dir === "down") {
    tile = mget(
      Math.floor((x + w / 2) / 8),
      Math.floor((y + h * 1.5) / 8)
    );
  } else if (dir === "left") {
    tile = mget(
      Math.floor((x - w / 2) / 8),
      Math.floor((y + h / 2) / 8)
    );
  } else if (dir === "right") {
    tile = mget(
      Math.floor((x + w * 1.5) / 8),
      Math.floor((y + h / 2) / 8)
    );
  }
  return tile;
}
function CharacterTileInteractionSystem(entity, input) {
  var _a, _b, _c;
  const pos = entity.get(PositionComponent);
  const inventory = entity.get(InventoryComponent);
  const crop = entity.get(CropsComponent);
  const size = entity.get(SizeComponent);
  const d = entity.get(DirectionComponent);
  if (!pos || !inventory || !crop || !size || !d) return;
  if (input.pressA()) {
    const tile = onTile(pos.x, pos.y);
    if (((_a = inventory.equiped) == null ? void 0 : _a.type) === "hoe") dirtActions(pos.x, pos.y, tile);
    if (((_b = inventory.equiped) == null ? void 0 : _b.type) === "seed") {
      if (tile === dirt) {
        crop.add(toCrop(inventory.equiped, pos.x, pos.y));
        inventory.equiped.amount--;
      }
    }
    if (((_c = inventory.equiped) == null ? void 0 : _c.type) === "can") {
      const plant = crop.get(pos.x, pos.y);
      if (inventory.water > 0 && (plant == null ? void 0 : plant.stage) === "seed") {
        if (plant) {
          plant.stage = "watered";
        }
        inventory.water--;
      }
      if (MapConfig.water.includes(getTileAim(pos.x, pos.y, size.width, size.height, d.direction))) inventory.water = 3;
    }
  }
}
function toCrop(seed2, x, y) {
  return {
    location: {
      x,
      y
    },
    seedType: seed2.seedType,
    stage: seed2.stage,
    stageTime: seed2.stageTime,
    time: seed2.stageTime
  };
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
      const crop = crops.get(x * 8, y * 8);
      if (!crop) continue;
      const plant = cropsMap[crop.seedType];
      mset(crop.location.x, crop.location.y, plant[crop.stage]);
    }
  }
}
function MapUpdateSystem(entity) {
  const field = entity.get(CropsComponent);
  if (!field) return;
  for (let crop of field.crops) {
    if (crop.time > 0) {
      crop.time--;
    } else {
      crop.time = crop.stageTime;
      if (crop.stage === "grown") crop.time = 0;
      if (crop.stage === "plant") crop.stage = "grown";
      if (crop.stage === "watered") crop.stage = "plant";
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
