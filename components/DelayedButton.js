import React from 'react'

class DelayedButton extends React.Component {
  constructor() {
    super()

    this.delayClick = this.delayClick.bind(this)
  }

  delayClick(event) {
    event.persist()
    const clickEvent = event
    
    setTimeout(this.props.onDelayedClick, this.props.delay, clickEvent)
  }

  render() {
    return (
      <button onClick={this.delayClick}>Delayed Button</button>
    )
  }
}

export default DelayedButton
