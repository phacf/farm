import { IIdController } from "@interfaces/IIdController";

export class IdController implements IIdController {
    private ids: number[] = [];

    getNewId(): number {
        let nextId = 0
        if (this.ids.length) nextId = this.ids[this.ids.length - 1]
        nextId++
        this.ids.push(nextId)
        return nextId
    }

    hasId(id: number): boolean {
        return this.ids.some(id)
    }

    removeId(id: number): void {
        this.ids = this.ids.filter(i => i !== id)
    }
}