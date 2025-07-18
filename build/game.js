
// title:   Dark Forest
// author:  PHACF
// desc:    short description
// site:    website link
// license: MIT License (change this to your license of choice)
// version: 0.1
// script:  js
const Keypad = {
  // Player 1 (ID base: 0)
  up: 0,
  down: 1,
  left: 2,
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
    return btn(Keypad.down);
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
}
class Character {
  constructor() {
    this.x = 6;
    this.y = 22;
    this.w = 7;
    this.h = 8;
    this.speed = 0;
    this.isAttacking = false;
    this.life = 1;
    this.receivedHits = 0;
    this.flip = 0;
    this.inputController = new InputController();
  }
  draw() {
    spr(256, this.x, this.y, 0, 1, this.flip, 0);
  }
  update() {
    const { isUp, isDown, isLeft, isRight } = this.inputController;
    if (isUp()) ;
    if (isDown()) ;
    if (isLeft()) ;
    if (isRight()) ;
  }
}
class Game {
  constructor() {
    this.player = new Character();
  }
  update() {
  }
  draw() {
    map();
    this.player.draw();
  }
}
const game = new Game();
function TIC() {
  cls();
  game.update();
  game.draw();
}
globalThis.TIC = TIC;
