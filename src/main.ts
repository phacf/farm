import { Game } from "@core/game";

const game = new Game();

function TIC() {
    cls()
    game.update();
    game.draw();
}

(globalThis as any).TIC = TIC;