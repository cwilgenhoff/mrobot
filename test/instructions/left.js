import sinon from 'sinon';
import chai from 'chai';
chai.should();

import Robot from '../../src/robot';
import Grid from '../../src/grid';
import InstructionLeft from '../../src/instructions/left';

describe('InstructionLeft', () => {
  it('should exist', () => {
    InstructionLeft.should.exist;
  });

  it('should have ID=L', () => {
    InstructionLeft.id.should.equal('L');
  });

  describe('execute', () => {
    let grid;
    let sandbox ;

    beforeEach(() => {
      sandbox = sinon.sandbox.create({ useFakeServer: false });
      grid = new Grid();
    });

    afterEach(() => {
      sandbox.restore();
    });

    it('should update robot orientation from north -> west', () => {
      const robot = new Robot({ orientation: 'N' });
      const robotSpy = sandbox.spy(robot, 'setOrientation');

      InstructionLeft.execute({ grid, robot });
      robotSpy.calledOnce.should.equal(true);
      robotSpy.calledWith('W').should.equal(true);
    });

    it('should update robot orientation from west -> south', () => {
      const robot = new Robot({ orientation: 'W' });
      const robotSpy = sandbox.spy(robot, 'setOrientation');

      InstructionLeft.execute({ grid, robot });
      robotSpy.calledOnce.should.equal(true);
      robotSpy.calledWith('S').should.equal(true);
    });

    it('should update robot orientation from south -> east', () => {
      const robot = new Robot({ orientation: 'S' });
      const robotSpy = sandbox.spy(robot, 'setOrientation');

      InstructionLeft.execute({ grid, robot });
      robotSpy.calledOnce.should.equal(true);
      robotSpy.calledWith('E').should.equal(true);
    });

    it('should update robot orientation from east -> north', () => {
      const robot = new Robot({ orientation: 'E' });
      const robotSpy = sandbox.spy(robot, 'setOrientation');

      InstructionLeft.execute({ grid, robot });
      robotSpy.calledOnce.should.equal(true);
      robotSpy.calledWith('N').should.equal(true);
    });
  });
});