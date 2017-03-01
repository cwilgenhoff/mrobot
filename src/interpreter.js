import { createInterface } from 'readline';
import { createReadStream } from 'fs';

import Grid from './grid';
import Robot from './robot';
import { configureInstructions } from './instructions/index';

class Interpreter {
  constructor(filePath) {
    this.instructions = configureInstructions();
    this.lineReader = createInterface({
      input: createReadStream(filePath).on('error', this.handleFileErrors),
    });
    this.PATTERNS = {
      SET_GRID_MAX_POINT: /^[0-9]\s[0-9]$/,
      SET_ROBOT_POSITION_AND_ORIENTATION: /^[0-9]\s[0-9]\s[NESW]$/,
      INSTRUCTIONS: /^[A-Z]+$/,
    };
    this.robots = [];
  }

  arrayFrom(line) {
    return line.trim().split('').filter(i => i !== ' ');
  }

  getLastAddedRobot() {
    return this.robots[this.robots.length - 1];
  }

  handleFileErrors = (error) => {
    console.log('There was an error trying to parse instructions.');
  }

  parseGridMaxPoint(line) {
    const input = this.arrayFrom(line);
    return {
      x: Number.parseInt(input[0], 10),
      y: Number.parseInt(input[1], 10)
    };
  }

  parseRobotPositionAndOrientation(line) {
    const input = this.arrayFrom(line);
    return {
      x: Number.parseInt(input[0], 10),
      y: Number.parseInt(input[1], 10),
      orientation: input[2]
    };
  }

  parseInstructions(line) {
    const input = this.arrayFrom(line);
    return input.map(char => this.instructions[char])
  }

  execute = (line) => {
    if (this.PATTERNS.SET_GRID_MAX_POINT.test(line)) {
      this.grid = new Grid();
      return this.grid.setMaxPoint(
        this.parseGridMaxPoint(line)
      );
    }

    if (this.PATTERNS.SET_ROBOT_POSITION_AND_ORIENTATION.test(line)) {
      return this.robots.push(
        new Robot(this.parseRobotPositionAndOrientation(line))
      );
    }

    if (this.PATTERNS.INSTRUCTIONS.test(line)) {
      return this.getLastAddedRobot().execute(
        this.parseInstructions(line), this.grid
      );
    }
  }

  parse = () => {
    this.lineReader
      .on('line', line => this.execute(line))
      .on('close', () => this.results())
  }

  results() {
    this.robots.map(robot =>
      console.log(`${robot.position.x} ${robot.position.y} ${robot.orientation} ${robot.isLost ? 'LOST' : ''}`)
    );
  }
}

export default Interpreter;
