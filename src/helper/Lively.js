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

  pingpong(x, y, width, height, duration, delay) {
    let diffX, diffY, newWidth, newHeight;
    if (!this.state.ponged) {
      diffX = x;
      diffY = y;
      newWidth = width || this.originWidth;
      newHeight = height || this.originHeight;
      this.toggleState('ponged')
    } else {
      diffX = 0;
      diffY = 0;
      newWidth = this.originWidth;
      newHeight = this.originHeight;
      this.toggleState('ponged')
    }

    anime({
      targets: this.target,
      translateX: diffX,
      translateY: diffY,
      width: {
        value: newWidth,
        easing: 'easeOutCubic',
        duration: duration / 4 || 250,
      },
      height: {
        value: newHeight,
        easing: 'easeOutCubic',
        duration: duration / 4 || 250,
      },
      duration: duration || 1000,
      delay: delay || 0,
    })
  }
}

export default Lively
