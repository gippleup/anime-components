import ReactDOMServer from 'react-dom/server'

//bind component for use
class RactUtil {
  constructor(component) {
    this.target = component;
  }
  /**
   * @param {object} newState 
   */
  setState(newState) {
    this.target.setState(newState);
  }

  setValue(key, value) {
    let newState = {};
    newState[key] = value;
    this.setState(newState)
  }

  toggleState(key) {
    this.setState(key, !this.state[key])
  }

  static tempRender(reactComponent) {
    let tempRender = document.createElement('div');
    let textRender = ReactDOMServer.renderToString(reactComponent);
    tempRender.innerHTML = textRender;
    return tempRender;
  }
}

module.exports = RactUtil;