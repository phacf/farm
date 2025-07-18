import { InputController } from "controllers/inputController";
import { ICharacter } from "interfaces/ICharacter";

export class Character implements ICharacter {

    private inputController: InputController;
    private x = 6;
    private y = 22;
    private w = 7;
    private h = 8;
    private speed = 0;
    private isAttacking = false;
    private life = 1;
    private receivedHits = 0; //4 hits = life--
    private flip = 0;

    constructor() {
        this.inputController = new InputController();
    }

    draw(): void {
        spr(256, this.x, this.y, 0, 1, this.flip, 0)
    }

    update(): void {
        const { isUp, isDown, isLeft, isRight } = this.inputController;

        if (isUp()) { }
        if (isDown()) { }
        if (isLeft()) { }
        if (isRight()) { }

    }
}