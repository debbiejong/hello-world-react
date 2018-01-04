import React, { Component } from 'react';
import './HelloWorldList.css';

import HelloWorld from './HelloWorld';

class HelloWorldList extends Component {
  constructor(props) {
    super(props);
    this.state = {greetings: ['Debonaire', 'Dyan']};
  }

  render() {
    return (
      <div className="HelloWorldList">
        <HelloWorld name="Debonaire"/>
        <HelloWorld name="Dyan"/>
      </div>
    );
  }
}

export default HelloWorldList;
