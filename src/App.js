import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dropdown from "./Dropdown";
const data = [
  { key: 'A', text: 'Option a' },
  { key: 'B', text: 'Option b' },
  { key: 'C', text: 'Option c' },
  { key: 'D', text: 'Option d' },
  { key: 'E', text: 'Option e' },
  { key: 'F', text: 'Option f' },
  { key: 'G', text: 'Option g' }
  ]
class App extends Component {
  render() {
    return (
      <div className="App">
        <Dropdown data={data}/>
      </div>
    );
  }
}

export default App;
