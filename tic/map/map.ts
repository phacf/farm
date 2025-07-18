export const MapScreen = {
  w: 29,
  h: 16
} as const;

/**
 * 
 * @param x screen do mapa em x
 * @param y screen do mapa em y
 * @returns primeiro tile de cada screen
 */
export function MapGrid(x: number, y: number) {
  return {
    x: x * (MapScreen.w + 1),
    y: y * (MapScreen.h + 1)
  } as const;
}
