import React, { Component } from 'react';
import Form from './components/Form';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Tell us about yourself to generate a business card!</h1>
        <Form />
      </div>
    );
  }
}

export default App;
