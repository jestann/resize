import React, { Component } from 'react'
import './../styles/resizable.css'

const Resizable = (props) => {
  console.log('render height: ', props.height)
  console.log('render width: ', props.width)
  const style = {
    top: props.y,
    left: props.x,
    width: props.width,
    height: props.height,
  }
/*  const keyFrames = `@keyframes move
    0% {
      width: ${props.startWidth};
      height: ${props.startHeight};
      left: ${props.startX};
      top: ${props.startY};
    }
    100% {
      width: ${props.width};    
      height: ${props.height};
      left: ${props.x};
      top: ${props.y};
    }`
  */
  console.log('style: ', style)
  return (
    <div className='box' style={style} onMouseDown={props.startMove} onMouseUp={props.handleMouseUp}>
      <div className='handle' onMouseDown={props.startResize}></div>
    </div>
  )
}

export default Resizable