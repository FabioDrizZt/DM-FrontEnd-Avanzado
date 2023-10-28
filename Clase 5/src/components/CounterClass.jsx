import { Component } from 'react'

export default class CounterClass extends Component {
  state = {
    count: 0
  }
  emojis = ['😀','🤩','👩‍🦰','🎏','🎉','🖖','🌟']
  handleIncrement = () => {
    this.setState({count: this.state.count + 1})
  }

  render() {
    return (
      <div>
        <h2>CounterClass: {this.state.count}</h2>
        <p>{this.emojis[this.state.count % this.emojis.length]}</p>
        <button onClick={this.handleIncrement}>Incrementar</button>
      </div>
    )
  }
}
