import ORIENTATION from '../constants/orientation';

class InstructionRight {
  constructor() {
    this.id = 'R';
  }

  getInstructionId() {
    return this.id;
  }

  execute = ({ grid, robot }) => {
    switch (robot.orientation) {
      case ORIENTATION.N:
        return robot.setOrientation(ORIENTATION.E);
      case ORIENTATION.E:
        return robot.setOrientation(ORIENTATION.S);
      case ORIENTATION.S:
        return robot.setOrientation(ORIENTATION.W);
      case ORIENTATION.W:
        return robot.setOrientation(ORIENTATION.N);
      default:
        return;
    }
  }
}

export default new InstructionRight();
