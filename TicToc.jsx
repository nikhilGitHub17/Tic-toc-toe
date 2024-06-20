import React, { useState } from 'react'
import Square from './Square'
import Style from './Style.module.css'
const TicToc = () => {
  const [xIsNext, setXIsNext] = useState(true);
  let [squares,setSquares]=useState(Array(9).fill(null))
  let handleClick=(i)=>{
    if (squares[i]) {
      return;
    }
    let nextSquares=squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    
    setSquares(nextSquares)
    setXIsNext(!xIsNext);
  }
  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }
  let handleRefresh=()=>{
    window.location.reload()
  }
  return (
   <>
   <h1>TIC-TOC-TOE</h1>
   <div className={Style.status}>{status}</div>
   <div className={Style.boardrow}>
        <Square value={squares[0]} onSquareClick={()=> handleClick(0)}/>
        <Square value={squares[1]} onSquareClick={()=> handleClick(1)}/>
        <Square value={squares[2]} onSquareClick={()=> handleClick(2)}/>
   </div>
      <div className={Style.boardrow}>
        <Square value={squares[3]} onSquareClick={()=> handleClick(3)}/>
        <Square value={squares[4]} onSquareClick={()=> handleClick(4)}/>
        <Square value={squares[5]} onSquareClick={()=> handleClick(5)}/>
      </div>
      <div className={Style.boardrow}>
        <Square value={squares[6]} onSquareClick={()=> handleClick(6)}/>
        <Square value={squares[7]} onSquareClick={()=> handleClick(7)}/>
        <Square value={squares[8]} onSquareClick={()=> handleClick(8)}/>
      </div>
      <button id={Style.r} onClick={handleRefresh}>new Game</button>
   </>
  )
}

export default TicToc