/**
 * movimentos suaves
 * @param a ponto de partida
 * @param b ponto de destino
 * @param t tempo ou fator de interpolação ex: velocidade
 * @returns 
 */
export function LERP(a: number,b: number,t: number): number{
    return a + (b-a) * t
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