import React from 'react'

class CoordinatesButton extends React.Component {
  constructor() {
    super()

    this.handleCreateCoordinates = this.handleCreateCoordinates.bind(this)
  }

  handleCreateCoordinates(event) {
    const x = event.clientX
    const y = event.clientY
    this.props.onReceiveCoordinates([x, y])
  }
  render() {
    return (
      <button onClick={this.handleCreateCoordinates}>Coordinates Button</button>
    )
  }
}

export default CoordinatesButton
