import anime from 'animejs'

export class Lively {
  constructor(el) {
    this.target = el;
    this.originWidth = el.offsetWidth;
    this.originHeight = el.offsetHeight;
    this.originX = el.offsetLeft;
    this.originY = el.offsetTop;
    this.state = {
      ponged: false,
      playing: false,
    }
  }
  setValue(stateName, value) {
    let newState = {};
    newState[stateName] = value;
    Object.assign(this.state, newState);
  }

  toggleState(stateName) {
    this.setValue(stateName, !this.state[stateName])
  }

  recover = (option) => {
    let defaultOption = {
      translateX: '0px',
      translateY: '0px',
      translateZ: '0px',
      rotate: '0deg',
      rotateX: '0deg',
      rotateY: '0deg',
      rotateZ: '0deg',
      width: this.originWidth,
      height: this.originHeight,
      skew: '0deg',
      skewX: '0deg',
      skewY: '0deg',
      perspective: '0px',
    }
    Object.assign(defaultOption, option);
    this.animate(defaultOption)
  }

  animate = (option) => {
    anime.remove(this.target);
    this.setValue('playing', true);
    let newOption = Object.assign(
      {targets: this.target},
      option
    )
    anime(newOption)
  }
}

export default Lively
