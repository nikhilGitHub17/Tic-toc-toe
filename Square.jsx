import React from 'react'
import Style from './Style.module.css'
const Square = ({value,onSquareClick}) => {
    
    
  return (
    <div>
        <button className={Style.square} onClick={onSquareClick}><strong> {value} </strong></button>
    </div>
  )
}

export default Square