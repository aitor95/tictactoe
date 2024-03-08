import { Circle } from '../components/icons/Circle'
import { Cross } from '../components/icons/Cross'

const TURNS = {
  X: Cross,
  O: Circle
}

const WINNER_CONDITIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [2, 4, 6],
  [0, 3, 6],
  [1, 4, 7],
  [3, 6, 8]
]

export { TURNS, WINNER_CONDITIONS }
