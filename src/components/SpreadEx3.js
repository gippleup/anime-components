import React, { Component } from 'react'
import Spread from './Spread';

export class SpreadEx3 extends Component {
  tempParent = <>
    <div
      style={{
        position: 'absolute',
        backgroundColor: this.props.parentColor || 'red',
        borderRadius: '50%',
        opacity: 0.8,
        width: this.props.parentWidth + 'px',
        height: this.props.parentWidth + 'px',
        left: -this.props.parentWidth / 2 + 'px',
        top: -this.props.parentWidth / 2 + 'px',
      }}
      className='spread-parent'>
    </div>
  </>

  singleItem = () => {
    return (
      <div 
        className="spread-child" 
        style={{
          backgroundColor: this.props.childColor || 'yellow',
          borderRadius: '50%',
          opacity: 0.8,
          width: this.props.itemWidth + 'px',
          height: this.props.itemWidth + 'px',
          left: -this.props.itemWidth / 2 + 'px',
          top: -this.props.itemWidth / 2 + 'px',
        }}>
      </div>
    )
  }

  tempItems = () => {
    let result = [];
    for (let i = 0; i < this.props.itemCount; i += 1) {
      let item = this.props.child || this.singleItem();
      result.push(item);
    }
    return result;
  }

  render() {
    return (
      <Spread
          id={this.props.id}
          parent={this.tempParent || this.props.parent} 
          items={this.tempItems()}
          start={0} end={360 - 360/this.props.itemCount} distance={this.props.distance}/>
    )
  }
}

export default SpreadEx3
