import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import HoverMenu from './components/HoverMenu';
import Spread from './components/Spread';

class App extends Component {

  tempParent = <>
    <button 
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
      }}
      className='spread-parent'
    >
      Parent
    </button>
  </>

  tempItems = <>
    <button className='spread-child'>
      Temp
    </button>
    <button className='spread-child'>
      Temp
    </button>
    <button className='spread-child'>
      Temp
    </button>
    <button className='spread-child'>
      Temp
    </button>
    <button className='spread-child'>
      Temp
    </button>
    <button className='spread-child'>
      Temp
    </button>
    <button className='spread-child'>
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
            left: '200px',
            top: '200px'
          }}
        >
          <Spread 
            id='test' 
            parent={this.tempParent} 
            items={this.tempItems} 
            start={0} end={180} distance={100}/>
        </div>
      </div>
    );
  }
}

export default App;
