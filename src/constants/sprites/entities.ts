export const Direction = {
    up: 'up',
    down: 'down',
    left: 'left',
    right: 'right',
} as const;

export type DirectionType = typeof Direction[keyof typeof Direction];