import React from 'react'

const style = {backgroundColor: 'lightblue',
border:'2px solid darkblue',
fontSize: '40px',
fontWeight: 'bold',
cursor:'pointer',
outline: 'none'}


 const Square = ({square, onClick}) => {
  console.log(square)
  return (
        <button style={style} className='square' onClick={onClick}>
            {square}
        </button>
  )
}

export default Square