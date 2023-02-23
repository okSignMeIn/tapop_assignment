import React from 'react'
import './Img.css'

function Img({x,y}) {
  console.log(x,y);
  return (
    <div className='img'>
      <div className='square' style={{transform: `rotateX(${x}deg) rotateY(${y}deg)`}}>
        Square
      </div>
    </div>
  )
}

export default Img