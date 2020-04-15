import React, { Component } from 'react'
import Spread from './Spread';

export class SpreadEx1 extends Component {
  tempParent = <>
    <button 
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
      }}
      className='spread-parent'>
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
      <div style={{
        position:'absolute',
        left: '200px',
        top: '200px'
      }}>
        <Spread 
            id='test' 
            parent={this.tempParent} 
            items={this.tempItems} 
            start={0} end={180} distance={100}/>
      </div>
    )
  }
}

export default SpreadEx1
