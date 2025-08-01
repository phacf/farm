import { DirectionType } from "@constants/sprites/entities"

/**
 * movimentos suaves
 * @param a ponto de partida
 * @param b ponto de destino
 * @param t tempo ou fator de interpolação ex: velocidade
 * @returns 
 */
export function LERP(a: number, b: number, t: number): number {
  return a + (b - a) * t
}

/**
 * 
 * @param tilex 
 * @param tiley 
 * @returns desired Tile in pixel
 */
export function goToTile(tilex: number, tiley: number) {
  return { x: tilex * 8, y: tiley * 8 }
}

/*
 Normaliza a velocidade na diagonal
    if (dx !== 0 && dy !== 0) {
      dx *= 0.7071
      dy *= 0.7071
    }
    atualiza com a velocidade
    this.x += dx * this.speed
    this.y += dy * this.speed
*/

export function getTileAim(x: number, y: number, w: number, h: number, dir: DirectionType) {
  let tile = 0
  if (dir === "up") {//up
    tile = mget(
      Math.floor((x + w / 2) / 8),
      Math.floor((y - h / 2) / 8)
    )
  }
  else if (dir === "down") {//down
    tile = mget(
      Math.floor((x + w / 2) / 8),
      Math.floor((y + h * 1.5) / 8)
    )
  }
  else if (dir === "left") {//left
    tile = mget(
      Math.floor((x - w / 2) / 8),
      Math.floor((y + h / 2) / 8)
    )
  }
  else if (dir === "right") {//right
    tile = mget(
      Math.floor((x + w * 1.5) / 8),
      Math.floor((y + h / 2) / 8)
    )
  }
  return tile
}
