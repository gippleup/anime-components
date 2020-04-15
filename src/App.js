import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import HoverMenu from './components/HoverMenu';

class App extends Component {

  tempButton = <>
    <button className='hovemenuelement'>
      Temp
    </button>
    <button className='hovemenuelement'>
      Temp
    </button>
    <button className='hovemenuelement'>
      Temp
    </button>
  </>

  render() {
    return (
      <div className="App">
        <div 
          id="menu" 
          style={{
            position:'absolute',
            left: '100px',
            top: '100px'
          }}
        >
          <HoverMenu items={this.tempButton}/>
        </div>
      </div>
    );
  }
}

export default App;
