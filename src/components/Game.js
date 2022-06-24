import React, {useState} from 'react'
import{ calculateWinner} from '../helpers'
import Board from './Board'


const styles ={
  width:'200px',
  margin: '60px auto'
}


const Game = () => { 
  const [board, setBoard] = useState(Array(9).fill(null))
  const [xIsNext, setXisNext] = useState(true)
  const winner = calculateWinner(board)

  const handleClick = (i) => { 
    const updateBoard = [...board]
    console.log(updateBoard)
    //if user clicked occupied square or if game is won, return
    if(winner || updateBoard[i]){
      return
    } 
    updateBoard[i] = xIsNext ? 'X': 'O'
    setBoard(updateBoard)
    setXisNext(!xIsNext)
  }
  


  const renderMoves = () => (
    <button onClick={() => setBoard(Array(9).fill(null))}>Start Game</button>
      )
    
    
  return (
    <>
       <Board squares={board} onClick={handleClick}/>
       <div style={styles}>
        <p>{ winner ? 'the winner is: ' + winner : 'Next Player: ' + (xIsNext ? 'X' : 'O')}</p>
        {renderMoves()}
       </div>
    </>
  )
}

export default Game