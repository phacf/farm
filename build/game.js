
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
  entity.add(PositionComponent, { x: 0, y: 0 }).add(VelocityComponent, { dx: 0, dy: 0, speed: 1 }).add(TimerComponent, { time: 0 }).add(SpriteComponent, { id: 256, n: 2, interval: 15, colorKey: 0 });
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
function CharacterTimerSystem(entity) {
  const t = entity.get(TimerComponent);
  if (!t) return;
  t.time++;
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
    CharacterMovementSystem(this.player, this.input);
    CharacterTimerSystem(this.player);
  }
  draw() {
    map();
    CharacterDrawSystem(this.player);
  }
}
const game = new Game();
function TIC() {
  cls(3);
  game.update();
  game.draw();
}
globalThis.TIC = TIC;
