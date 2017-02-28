import ORIENTATION from './constants/orientation';

class Robot {
  constructor({ x = 0, y = 0, orientation = ORIENTATION.N } = {}) {
    this.position = { x, y };
    this.orientation = orientation;
    this.isLost = false;
  }

  setPosition = (position) => {
    this.position = { ...position };
  }

  setOrientation = (orientation) => {
    this.orientation = orientation;
  }

  setLost = () => {
    this.isLost = true;
  }

  execute = (instructions, grid) => {
    if (!grid) {
      return;
    }

    instructions.map(instruction => {
      if (this.isLost) {
        return;
      }

      instruction.execute({ grid, robot: this });
    });
  }
}

export default Robot;
