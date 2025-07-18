
// title:   Dark Forest
// author:  PHACF
// desc:    short description
// site:    website link
// license: MIT License (change this to your license of choice)
// version: 0.1
// script:  js
class Game {
  update() {
  }
  draw() {
    print("Dark Fortress", 0, 0, 12);
  }
}
const game = new Game();
function TIC() {
  cls();
  game.update();
  game.draw();
}
globalThis.TIC = TIC;
