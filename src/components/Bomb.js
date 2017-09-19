// Bomb Component Code Goes Here
import React from 'react'

class Bomb extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      secondsLeft: props.initialCount
      }
  }

  render() {
    return (this.state.secondsLeft == 0 ? <p>Boom!</p> : <p>{this.state.secondsLeft} seconds left before I go boom!</p>)
  }
}

export default Bomb










// In the components/Bomb.js file, create a Bomb React component.
// Its initial state should have a property called secondsLeft.
// The initial value of secondsLeft is set by passing in an initialCount prop to the Bomb component. Don't forget to pass the argument props into the constructor (i.e., constructor(props)).
// It should render the text '<SECONDS_LEFT> seconds left before I go boom!', where <SECONDS_LEFT> is the value of secondsLeft.
// If secondsLeft equals 0, it should render 'Boom!' instead.
