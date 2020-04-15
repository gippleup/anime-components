import React, { Component } from 'react'
import Spread from './Spread';

export class SpreadEx1 extends Component {
  tempParent = <>
    <div 
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
        backgroundColor: 'red'
      }}
      className='spread-parent'>
      This is a div parent.
    </div>
  </>

  tempItems = <>
    <div 
      className="spread-child" 
      style={{
        backgroundColor: 'yellow',
        width: '100px',
        height: '100px',
      }}>
      This is a div.
    </div>
    <div 
      className="spread-child" 
      style={{
        backgroundColor: 'yellow',
        width: '100px',
        height: '100px',
      }}>      
      This is a div.
    </div>
    <div 
      className="spread-child" 
      style={{
        backgroundColor: 'yellow',
        width: '100px',
        height: '100px',
      }}>      
      This is a div.
    </div>
  </>

  render() {
    return (
      <div style={{
        position:'absolute',
        right: '300px',
        top: '400px'
      }}>
        <Spread 
            id='example2' 
            parent={this.tempParent} 
            items={this.tempItems} 
            start={0} end={240} distance={100}/>
      </div>
    )
  }
}

export default SpreadEx1
