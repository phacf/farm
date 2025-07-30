export interface IInputController {
    isUp(): boolean;
    isDown(): boolean;
    isLeft(): boolean;
    isRight(): boolean;
    isA(): boolean;
    isB(): boolean;
    isX(): boolean;
    isY(): boolean;
    
    pressUp(): boolean;
    pressDown(): boolean;
    pressLeft(): boolean;
    pressRight(): boolean;
    pressA(): boolean;
    pressB(): boolean;
    pressX(): boolean;
    pressY(): boolean;
}
