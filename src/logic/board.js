import { WINNER_CONDITIONS } from '../consts/constants'

export function CheckWinner (boardToCheck) {
  for (const combination of WINNER_CONDITIONS) {
    const [a, b, c] = combination
    if (
      boardToCheck[a] &&
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[a] === boardToCheck[c]
    ) {
      return boardToCheck[a]
    }
  }
  return null
}

export function CheckEndGame (boardToCheck) {
  return boardToCheck.every(cell => cell !== null)
}
