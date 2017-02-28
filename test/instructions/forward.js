import sinon from 'sinon';
import chai from 'chai';
chai.should();

import Robot from '../../src/robot';
import Grid from '../../src/grid';
import InstructionForward from '../../src/instructions/forward';

describe('InstructionForward', () => {
  it('should exist', () => {
    InstructionForward.should.exist;
  });

  it('should have ID=F', () => {
    InstructionForward.id.should.equal('F');
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

    it('should update robot based on orientation from (0,0,N) -> (0,1,N)', () => {
      const robot = new Robot({ x: 0, y: 0, orientation: 'N' });
      const setPositionSpy = sandbox.spy(robot, 'setPosition');

      InstructionForward.execute({ grid, robot });
      setPositionSpy.calledOnce.should.equal(true);
      setPositionSpy.calledWith({ x: 0, y: 1 }).should.equal(true);
    });

    it('should update robot based on orientation from (0,0,E) -> (1,0,E)', () => {
      const robot = new Robot({ x: 0, y: 0, orientation: 'E' });
      const setPositionSpy = sandbox.spy(robot, 'setPosition');

      InstructionForward.execute({ grid, robot });
      setPositionSpy.calledOnce.should.equal(true);
      setPositionSpy.calledWith({ x: 1, y: 0 }).should.equal(true);
    });

    it('should update robot based on orientation from (1,1,S) -> (1,0,S)', () => {
      const robot = new Robot({ x: 1, y: 1, orientation: 'S' });
      const setPositionSpy = sandbox.spy(robot, 'setPosition');

      InstructionForward.execute({ grid, robot });
      setPositionSpy.calledOnce.should.equal(true);
      setPositionSpy.calledWith({ x: 1, y: 0 }).should.equal(true);
    });

    it('should update robot based on orientation from (1,1,W) -> (0,1,W)', () => {
      const robot = new Robot({ x: 1, y: 1, orientation: 'W' });
      const setPositionSpy = sandbox.spy(robot, 'setPosition');

      InstructionForward.execute({ grid, robot });
      setPositionSpy.calledOnce.should.equal(true);
      setPositionSpy.calledWith({ x: 0, y: 1 }).should.equal(true);
    });
  });
});