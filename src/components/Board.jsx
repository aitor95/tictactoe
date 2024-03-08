/* eslint-disable no-unused-vars */
import { useState } from 'react'
import { TURNS } from '../consts/constants'
import Cell from './Cell'
import './styles/Board.css'
import { CheckEndGame, CheckWinner } from '../logic/board'
import { WinnerModal } from './WinnerModal'
export default function Board () {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(TURNS.X)
  const [winner, setWinner] = useState(null)

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }

  const updateBoard = (index) => {
    if (board[index] || winner) return

    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    const newWinner = CheckWinner(newBoard)
    if (newWinner) {
      setWinner(newWinner)
    } else if (CheckEndGame(newBoard)) {
      setWinner(false)
    }
  }

  return (
    <main className='board'>
      <section className='board__table'>
        {board.map((cell, index) => (
          <Cell
            key={index}
            index={index}
            updateBoard={updateBoard}
          >{cell}
          </Cell>
        ))}
      </section>
      <section className='board__info'>
        <h1>Tres en raya</h1>
        <p>La primera persona que alinee tres símbolos en una línea gana.</p>
        <section className='board__turn'>
          <div>
            <p>Turno de:</p>
            <div className='board__turn__info'>
              <Cell isSelected={turn === TURNS.X}>{TURNS.X}</Cell>
              <Cell isSelected={turn === TURNS.O}>{TURNS.O}</Cell>
            </div>
          </div>
        </section>
        <button className='button' onClick={resetGame}>Comenzar de nuevo</button>
      </section>
      <WinnerModal resetGame={resetGame} winner={winner} />
      <footer>
        <p>
          Diseñado por
        </p>
        <a
          target='_blank'
          rel='noreferrer'
          href='https://dribbble.com/shots/18581013-Tic-Tac-Toe'
        >
          Maciej Biel
        </a>
      </footer>
    </main>
  )
}
