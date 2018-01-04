import React from 'react';
import './App.css';
import HelloWorld from './HelloWorld';

const App = () => {
  return (
    <div className="App">
      <HelloWorld name="Debbie"/>
      <HelloWorld name="Diane"/>
    </div>
    );
};

export default App;
