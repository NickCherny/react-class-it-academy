import React, { Component } from 'react';
import mocData from './moc';

class App extends Component {
  render() {
    return (
      <main>
        {JSON.stringify(mocData)}
      </main>
    );
  }
}

export default App;
