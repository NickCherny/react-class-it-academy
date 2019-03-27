import React from 'react';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
    }
  }

  changeState() {
    let temp = !this.state.isActive;
    this.setState({isActive: temp});
  }

  render() {
    return(<div className='accordion'>
      <div className='header'
           onClick={this.changeState.bind(this)}>
        <span className='header-title'>Accordion</span>
        <span className='header-button'></span>
      </div>
      {this.state.isActive && <div className='content'>
        <span className='content-text'>Some text</span>
      </div>}
    </div>);
    
  }
}

export default App;
