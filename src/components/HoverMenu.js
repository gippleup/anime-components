import React, { Component } from 'react'
import Lively from '../helper/Lively'

export class HoverMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialized: false,
      items: [],
      itemCount: 0,
    }
  }
  largeSide = this.props.width ? 
    Math.max(this.props.width, this.props.height) : null;

  menuStyle = {
    width: this.props.width || '30px',
    height: this.props.height || '4px',
    backgroundColor: this.props.color || 'black',
    margin: this.props.margin || '6px 0',
    borderRadius: this.props.borderRaius || '10px'
  }

  buttonStyle = {
    position: 'absolute',
    left: 0,
    top: 0,
    width: this.largeSide || 'fit-content',
    height: this.largeSide || 'fit-content',
    padding: '2px 5px',
    outline: '0',
  }

  onClick = (e) => {
    let menu = e.target;
    let hoverItems = menu.parentElement.querySelectorAll('button.hovemenuelement');

    if (!this.state.initialized && hoverItems[0]) {
      let newState = {items:[]};
      hoverItems.forEach(item => {
        newState.items.push(new Lively(item));
      })
      newState.initialized = true;
      this.setState(newState)
    } else {
      this.state.items.forEach((item, i) => {
        item.pingpong(100, 100, 100, 100, 1000, i * 100);
      })
    }

    if (typeof this.props.onClick === 'function') {
      this.props.onClick();
    }
  }

  render() {
    return (
      <div 
        className={this.props.className}
        style={this.props.style}
        id={this.props.id}
      >
        <button onClick={this.onClick} className="hovemenubutton" style={this.props.buttonStyle || this.buttonStyle}>
          <div style={this.props.menuStyle || this.menuStyle}></div>
          <div style={this.props.menuStyle || this.menuStyle}></div>
          <div style={this.props.menuStyle || this.menuStyle}></div>
        </button>
        <div>
          <button className="hovemenuelement">Test</button>
          <button className="hovemenuelement">Test</button>
          <button className="hovemenuelement">Test</button>
        </div>
      </div>
    )
  }
}

export default HoverMenu
