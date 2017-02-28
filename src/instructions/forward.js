import ORIENTATION from '../constants/orientation';

class InstructionForward {
  constructor() {
    this.id = 'F';
  }

  getInstructionId() {
    return this.id;
  }

  execute = ({ grid, robot }) => {
    const { x, y } = robot.position;
    const STEP = 1;

    switch (robot.orientation) {
      case ORIENTATION.N:
        return robot.setPosition( { x, y: y + STEP });
      case ORIENTATION.E:
        return robot.setPosition( { x: x + STEP, y });
      case ORIENTATION.S:
        return robot.setPosition( { x, y: y - STEP });
      case ORIENTATION.W:
        return robot.setPosition( { x: x - STEP, y });
      default:
        return;
    }
  }
}

export default new InstructionForward();
