import { IInputController } from "interfaces/IInputController";
import { Keypad } from "@tic/keys/keys";

export class InputController implements IInputController {
    isUp(): boolean {
        return btn(Keypad.up);
    }

    isDown(): boolean {
        return btn(Keypad.down);

    }

    isLeft(): boolean {
        return btn(Keypad.left);

    }

    isRight(): boolean {
        return btn(Keypad.right);

    }

    isA(): boolean {
        return btn(Keypad.a);

    }

    isB(): boolean {
        return btn(Keypad.b);

    }

    isX(): boolean {
        return btn(Keypad.x);

    }

    isY(): boolean {
        return btn(Keypad.y);

    }

    pressUp(): boolean {
        return btnp(Keypad.up);
    }

    pressDown(): boolean {
        return btnp(Keypad.down);

    }

    pressLeft(): boolean {
        return btnp(Keypad.left);

    }

    pressRight(): boolean {
        return btnp(Keypad.right);

    }

    pressA(): boolean {
        return btnp(Keypad.a);

    }

    pressB(): boolean {
        return btnp(Keypad.b);

    }

    pressX(): boolean {
        return btnp(Keypad.x);

    }

    pressY(): boolean {
        return btnp(Keypad.y);

    }
}