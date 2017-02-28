import ORIENTATION from '../constants/orientation';

class InstructionForward {
  constructor() {
    this.id = 'F';
  }

  getInstructionId() {
    return this.id;
  }

  static calculateMovement(robot) {
    const { x, y } = robot.position;
    const STEP = 1;

    switch (robot.orientation) {
      case ORIENTATION.N:
        return { x, y: y + STEP };
      case ORIENTATION.E:
        return { x: x + STEP, y };
      case ORIENTATION.S:
        return { x, y: y - STEP };
      case ORIENTATION.W:
        return { x: x - STEP, y };
      default:
        return robot.position;
    }
  }

  execute = ({ grid, robot }) => {
    if (!robot || !grid) {
      return;
    }

    const newPosition = InstructionForward.calculateMovement(robot);

    if (grid.isOutsideGrid(newPosition) && grid.isScentedPosition(robot.position)) {
      return;
    }

    if (grid.isOutsideGrid(newPosition)) {
      robot.setLost();
      return grid.setScentedPosition(robot.position);
    }

    robot.setPosition(newPosition);
  }
}

export default new InstructionForward();
