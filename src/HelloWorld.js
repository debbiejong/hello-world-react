import React, { Component } from 'react';
import './HelloWorld.css';

// const HelloWorld = props => {
//   return (<div className="HelloWorld">Hello {props.name}!</div>);
// };

class HelloWorld extends Component {
  constructor(props) {
    super(props);
    this.state = { greeting: 'Hello' };
    this.frenchify = this.frenchify.bind(this);
    this.removeGreeting = this.removeGreeting.bind(this);
  }

  frenchify() {
    this.setState({greeting: 'Bonjour'});
  }

  removeGreeting() {
    this.props.removeGreeting(this.props.name);
  }

  render () {
    return (
      <div className="HelloWorld">
      {this.state.greeting} {this.props.name}!
      <br/>
      <button onClick={this.frenchify}>Frenchify!</button>
      <button onClick={this.removeGreeting}>Remove me!</button>
      </div>
    );
  }
}

export default HelloWorld;
