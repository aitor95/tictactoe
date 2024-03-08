import './styles/Cell.css'

export default function Cell ({ children, index, updateBoard, isSelected }) {
  const className = `cell ${isSelected ? 'is_selected' : ''}`

  const handleClick = () => {
    updateBoard(index)
  }

  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  )
}
