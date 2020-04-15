import React, { Component } from 'react';
import ReactDOMServer from 'react-dom/server';
import Lively from '../helper/Lively';

export class Spread extends Component {
  constructor(props) {
    super(props)
  }
  
  componentWillMount() {
  }

  render() {
    return (
      <div>
        {this.props.parent}
        {this.props.children}
      </div>
    )
  }
}

export default Spread
