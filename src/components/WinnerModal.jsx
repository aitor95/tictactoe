import './styles/WinnerModal.css'
export function WinnerModal ({ winner, resetGame }) {
  if (winner === null) return
  const winnerMessage = `${winner ? 'El ganador es: ' : 'Empate!'} `

  return (
    <section className='winner__modal'>
      <div className='modal'>
        <h1>
          {winnerMessage}
        </h1>
        <div className='icon'>
          {winner}
        </div>
        <button onClick={resetGame}>Volver a empezar</button>
      </div>
    </section>

  )
}
