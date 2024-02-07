import React, { Component } from 'react'

export class Cc extends Component {
    constructor(props) {
        super(props);
        this.state={greeting:"hello"}
    }
  render() {
    return (
        <div><p>{this.state.greeting} { this.props.name}</p></div>
    )
  }
}

export default Cc