import ORIENTATION from '../constants/orientation';

class InstructionLeft {
  constructor() {
    this.id = 'L';
  }

  getInstructionId() {
    return this.id;
  }

  execute = ({ robot = {} }) => {
    switch (robot.orientation) {
      case ORIENTATION.N:
        return robot.setOrientation(ORIENTATION.W);
      case ORIENTATION.E:
        return robot.setOrientation(ORIENTATION.N);
      case ORIENTATION.S:
        return robot.setOrientation(ORIENTATION.E);
      case ORIENTATION.W:
        return robot.setOrientation(ORIENTATION.S);
      default:
        return;
    }
  }
}

export default new InstructionLeft();