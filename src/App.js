import React, { Component } from 'react';
// import SpreadEx1 from './components/SpreadEx1'
// import SpreadEx2 from './components/SpreadEx2'
import SpreadEx3 from './components/SpreadEx3'
import './App.css';
import AnimeMenu from './components/AnimeMenu'

class App extends Component {
  spreader(option) {
    return (
      <div 
        style={{
          left: option.left + 'px',
          top: option.top + 'px',
          position: 'absolute'}}>
        <SpreadEx3
          id={option.id}
          itemCount={option.count}
          childColor={option.childColor}
          parentColor={option.parentColor}
          distance={option.distance}
          itemWidth={option.childWidth}
          parentWidth={option.parentWidth}/>
      </div>
    )
  }

  randomSpreader = (id) => {
    var randomColor1 = '#' + Math.floor(Math.random() * 16777215).toString(16);
    var randomColor2 = '#' + Math.floor(Math.random() * 16777215).toString(16);
    let random = (min, num) => min + Math.ceil(Math.random() * (num - min));
    let randomOption = {
      count: random(10, 20),
      distance: random(20, 50), 
      childWidth: random(5, 10),
      parentWidth: random(25, 20), 
      left: random(0, document.body.clientWidth),
      top: random(0, 1000),
      parentColor: randomColor1,
      childColor: randomColor2,
      id: id,
    }
    return this.spreader(randomOption);
  }

  generateRandom = (count) => {
    let result = [];
    for(let i = 0; i < count; i += 1) {
      result.push(this.randomSpreader(i+1));
    }
    return result;
  }

  render() {

    return (
      <div className="App">
        {this.generateRandom(50)}
      </div>
    );
  }
}

export default App;
