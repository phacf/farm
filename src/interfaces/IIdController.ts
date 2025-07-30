export interface IIdController {
    getNewId(): number
    hasId(id: number): boolean
    removeId(id: number): void
}