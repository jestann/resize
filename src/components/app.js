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
      startX: 5,
      startY: 5,
      startResizeX: 0,
      startResizeY: 0,
      startMoveX: 0,
      startMoveY: 0,
      startWidth: 200,
      startHeight: 100,
      resize: false,
      move: false
    }
    this.move = this.move.bind(this)
    this.resize = this.resize.bind(this)
    this.startResize = this.startResize.bind(this)
    this.startMove = this.startMove.bind(this)
    this.handleMouseUp = this.handleMouseUp.bind(this)
    this.handleMouseMove = this.handleMouseMove.bind(this)
  }

  handleMouseMove (event) {
    if (this.state.resize) {
      this.resize(event)
    } else if (this.state.move) {
      this.move(event)
    } 
  }

  handleMouseUp (event) {
    if (this.state.resize) {
      this.resize(event)
      this.setState({ resize: false })
    } else if (this.state.move) {
      this.move(event)
      this.setState({ move: false })
    }
  }

  startMove (event) {
    event.persist()
    console.log('start move: ', event)
    this.setState({
      startX: this.state.x,
      startY: this.state.y,
      startMoveX: event.screenX,
      startMoveY: event.screenY,
      move: true
    })  
    console.log('start x: ', this.state.startMoveX)
    console.log('start y: ', this.state.startMoveY)
  }
  
  move (event) {
    event.persist() 
    console.log('move: ', event)
    let differenceX = event.screenX - this.state.startMoveX
    let differenceY = event.screenY - this.state.startMoveY
    console.log('differenceX: ', differenceX)
    console.log('differenceY: ', differenceY)
    let newX = this.state.startX + differenceX
    let newY = this.state.startY + differenceY
    console.log('new x: ', newX)
    console.log('new y: ', newY)
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
      startResizeX: event.screenX,
      startResizeY: event.screenY,
      startWidth: this.state.width,
      startHeight: this.state.height,
      resize: true,
      move: false
    })    
  }

  resize (event) {
    this.setState({ move: false })
    event.persist()
    console.log('start width: ', this.state.width)
    console.log('start height: ', this.state.height)
    console.log('start resize x: ', event.screenX)
    console.log('start resize y: ', event.screenY)
    let minWidth = 10
    let minHeight = 20
    let differenceX = event.screenX - this.state.startResizeX
    let differenceY = event.screenY - this.state.startResizeY
    console.log('make this much wider: ', differenceX)
    console.log('make this much taller: ', differenceY)
    let newWidth = this.state.startWidth + differenceX
    let newHeight = this.state.startHeight + differenceY
    let width = newWidth > minWidth ? newWidth : minWidth
    let height = newHeight > minHeight ? newHeight : minHeight
    console.log('new width: ', width)
    console.log('new height: ', height)
    this.setState({
      width: width, 
      height: height,
    })
  }

  render() {
    return (
      <div className="app" onMouseUp={this.handleMouseUp} onMouseMove={this.handleMouseMove}>
        <Resizable {...this.state} startMove={this.startMove} startResize={this.startResize} handleMouseUp={this.handleMouseUp} handleMouseMove={this.handleMouseMove} />
      </div>
    )
  }
}

export default App
