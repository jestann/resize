import React, { Component } from 'react'
import Resizable from './resizable'
import './../styles/main.css'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      x: 5,
      y: 5,
      width: 200,
      height: 100,
      startX: 0,
      startY: 0,
      startWidth: 200,
      startHeight: 100,
      resize: false
    }
    this.move = this.move.bind(this)
    this.resize = this.resize.bind(this)
    this.startResize = this.startResize.bind(this)
    this.startMove = this.startMove.bind(this)
    this.handleMouseUp = this.handleMouseUp.bind(this)
  }

  startMove (event) {
    event.persist()
    console.log('start move: ', event)
    this.setState({
      startX: event.screenX,
      startY: event.screenY
    })  
    console.log('start x: ', this.state.startX)
    console.log('start y: ', this.state.startY)
  }
  
  move (event) {
    event.persist() 
    console.log('move: ', event)
    let differenceX = event.screenX - this.state.startX
    let differenceY = event.screenY - this.state.startY
    console.log('differenceX: ', differenceX)
    console.log('differenceY: ', differenceY)
    let newX = this.state.x + differenceX
    let newY = this.state.y + differenceY
    let x = newX > 0 ? newX : 0
    let y = newY > 0 ? newY : 0
    this.setState({
      x: x,
      y: y
    })
  }

  startResize(event) {
    event.persist()
    console.log('startResize: ', event)
    this.setState({
      startX: event.screenX,
      startY: event.screenY,
      startWidth: this.state.width,
      startHeight: this.state.height,
      resize: true
    })    
  }
  
  handleMouseUp (event) {
    if (this.state.resize) {
      this.resize(event)
    } else {
      this.move(event)
    }
  }

  resize (event) {
    event.persist()
    console.log('resize: ', event)
    console.log('event.screenX: ', event.screenX)
    console.log('event.screenY: ', event.screenY)
    let minWidth = 10
    let minHeight = 20
    let differenceX = event.screenX - this.state.startX
    let differenceY = event.screenY - this.state.startY
    console.log('differenceX: ', differenceX)
    console.log('differenceY: ', differenceY)
    console.log('this.state.width: ', this.state.width)
    let newWidth = this.state.width + differenceX
    let newHeight = this.state.height + differenceY
    let width = newWidth > minWidth ? newWidth : minWidth
    let height = newHeight > minHeight ? newHeight : minHeight
    console.log('width: ', width)
    console.log('height: ', height)
    this.setState({
      width: width, 
      height: height,
      resize: false
    })
    console.log('newWidth: ', this.state.width)
    console.log('newHeight: ', this.state.height)
  }

  render() {
    return (
      <div className="app" onMouseUp={this.handleMouseUp}>
        <Resizable {...this.state} startMove={this.startMove} startResize={this.startResize} handleMouseUp={this.handleMouseUp} />
      </div>
    )
  }
}

export default App
