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
      grid.setMaxPoint({ x: 1, y: 1 });
    });

    afterEach(() => {
      sandbox.restore();
    });

    it('should update robot position from (0,0,N) -> (0,1,N)', () => {
      const robot = new Robot({ x: 0, y: 0, orientation: 'N' });
      const setPositionSpy = sandbox.spy(robot, 'setPosition');

      InstructionForward.execute({ grid, robot });
      setPositionSpy.calledOnce.should.equal(true);
      setPositionSpy.calledWith({ x: 0, y: 1 }).should.equal(true);
    });

    it('should update robot position from (0,0,E) -> (1,0,E)', () => {
      const robot = new Robot({ x: 0, y: 0, orientation: 'E' });
      const setPositionSpy = sandbox.spy(robot, 'setPosition');

      InstructionForward.execute({ grid, robot });
      setPositionSpy.calledOnce.should.equal(true);
      setPositionSpy.calledWith({ x: 1, y: 0 }).should.equal(true);
    });

    it('should update robot position from (1,1,S) -> (1,0,S)', () => {
      const robot = new Robot({ x: 1, y: 1, orientation: 'S' });
      const setPositionSpy = sandbox.spy(robot, 'setPosition');

      InstructionForward.execute({ grid, robot });
      setPositionSpy.calledOnce.should.equal(true);
      setPositionSpy.calledWith({ x: 1, y: 0 }).should.equal(true);
    });

    it('should update robot position from (1,1,W) -> (0,1,W)', () => {
      const robot = new Robot({ x: 1, y: 1, orientation: 'W' });
      const setPositionSpy = sandbox.spy(robot, 'setPosition');

      InstructionForward.execute({ grid, robot });
      setPositionSpy.calledOnce.should.equal(true);
      setPositionSpy.calledWith({ x: 0, y: 1 }).should.equal(true);
    });

    describe('outside grid (4x4)', () => {
      let grid;
      let setScentedPositionSpy;

      beforeEach(() => {
        grid = new Grid();
        grid.setMaxPoint({ x: 3, y: 3 });
        setScentedPositionSpy = sandbox.spy(grid, 'setScentedPosition');
        sandbox.stub(grid, 'isScentedPosition').returns(false);
        sandbox.stub(grid, 'isOutsideGrid').returns(true);
      });

      it('should not update robot position from (3,3,N)', () => {
        const robot = new Robot({ x: 3, y: 3, orientation: 'N' });

        const setPositionSpy = sandbox.spy(robot, 'setPosition');
        const setLostSpy = sandbox.spy(robot, 'setLost');

        InstructionForward.execute({ grid, robot });
        setPositionSpy.called.should.equal(false);
        setLostSpy.calledOnce.should.equal(true);
        setScentedPositionSpy.calledOnce.should.equal(true);
        setScentedPositionSpy.calledWith({ x: 3, y: 3 }).should.equal(true);
      });

      it('should not update robot position from (0,3,E)', () => {
        const robot = new Robot({ x: 0, y: 3, orientation: 'E' });

        const setPositionSpy = sandbox.spy(robot, 'setPosition');
        const setLostSpy = sandbox.spy(robot, 'setLost');

        InstructionForward.execute({ grid, robot });
        setPositionSpy.called.should.equal(false);
        setLostSpy.calledOnce.should.equal(true);
        setScentedPositionSpy.calledOnce.should.equal(true);
        setScentedPositionSpy.calledWith({ x: 0, y: 3 }).should.equal(true);
      });

      it('should not update robot position from (3,0,S)', () => {
        const robot = new Robot({ x: 3, y: 0, orientation: 'S' });

        const setPositionSpy = sandbox.spy(robot, 'setPosition');
        const setLostSpy = sandbox.spy(robot, 'setLost');

        InstructionForward.execute({ grid, robot });
        setPositionSpy.called.should.equal(false);
        setLostSpy.calledOnce.should.equal(true);
        setScentedPositionSpy.calledOnce.should.equal(true);
        setScentedPositionSpy.calledWith({ x: 3, y: 0 }).should.equal(true);
      });

      it('should not update robot position from (0,3,W)', () => {
        const robot = new Robot({ x: 0, y: 3, orientation: 'W' });

        const setPositionSpy = sandbox.spy(robot, 'setPosition');
        const setLostSpy = sandbox.spy(robot, 'setLost');

        InstructionForward.execute({ grid, robot });
        setPositionSpy.called.should.equal(false);
        setLostSpy.calledOnce.should.equal(true);
        setScentedPositionSpy.calledOnce.should.equal(true);
        setScentedPositionSpy.calledWith({ x: 0, y: 3 }).should.equal(true);
      });
    })

    describe('outside grid and scented (4x4)', () => {
      let grid;
      let setScentedPositionSpy;

      beforeEach(() => {
        grid = new Grid();
        grid.setMaxPoint({ x: 3, y: 3 });
        setScentedPositionSpy = sandbox.spy(grid, 'setScentedPosition');
        sandbox.stub(grid, 'isScentedPosition').returns(true);
        sandbox.stub(grid, 'isOutsideGrid').returns(true);
      });

      it('should not update robot position from (3,3,N)', () => {
        const robot = new Robot({ x: 3, y: 3, orientation: 'N' });

        const setPositionSpy = sandbox.spy(robot, 'setPosition');
        const setLostSpy = sandbox.spy(robot, 'setLost');

        InstructionForward.execute({ grid, robot });
        setPositionSpy.called.should.equal(false);
        setLostSpy.called.should.equal(false);
        setScentedPositionSpy.called.should.equal(false);
      });

      it('should not update robot position from (0,3,E)', () => {
        const robot = new Robot({ x: 0, y: 3, orientation: 'E' });

        const setPositionSpy = sandbox.spy(robot, 'setPosition');
        const setLostSpy = sandbox.spy(robot, 'setLost');

        InstructionForward.execute({ grid, robot });
        setPositionSpy.called.should.equal(false);
        setLostSpy.called.should.equal(false);
        setScentedPositionSpy.called.should.equal(false);
      });

      it('should not update robot position from (3,0,S)', () => {
        const robot = new Robot({ x: 3, y: 0, orientation: 'S' });

        const setPositionSpy = sandbox.spy(robot, 'setPosition');
        const setLostSpy = sandbox.spy(robot, 'setLost');

        InstructionForward.execute({ grid, robot });
        setPositionSpy.called.should.equal(false);
        setLostSpy.called.should.equal(false);
        setScentedPositionSpy.called.should.equal(false);
      });

      it('should not update robot position from (0,3,W)', () => {
        const robot = new Robot({ x: 0, y: 3, orientation: 'W' });

        const setPositionSpy = sandbox.spy(robot, 'setPosition');
        const setLostSpy = sandbox.spy(robot, 'setLost');

        InstructionForward.execute({ grid, robot });
        setPositionSpy.called.should.equal(false);
        setLostSpy.called.should.equal(false);
        setScentedPositionSpy.called.should.equal(false);
      });
    })

    describe('inside the grid and scented (4x4)', () => {
      let grid;
      let setScentedPositionSpy;

      beforeEach(() => {
        grid = new Grid();
        grid.setMaxPoint({ x: 3, y: 3 });
        setScentedPositionSpy = sandbox.spy(grid, 'setScentedPosition');
        sandbox.stub(grid, 'isScentedPosition').returns(true);
        sandbox.stub(grid, 'isOutsideGrid').returns(false);
      });

      it('should update robot position from (3,0,N)', () => {
        const robot = new Robot({ x: 3, y: 0, orientation: 'N' });

        const setPositionSpy = sandbox.spy(robot, 'setPosition');
        const setLostSpy = sandbox.spy(robot, 'setLost');

        InstructionForward.execute({ grid, robot });
        setPositionSpy.calledOnce.should.equal(true);
        setPositionSpy.calledWith({ x: 3, y: 1 }).should.equal(true);
        setLostSpy.called.should.equal(false);
        setScentedPositionSpy.called.should.equal(false);
      });

      it('should update robot position from (0,3,E)', () => {
        const robot = new Robot({ x: 0, y: 3, orientation: 'E' });

        const setPositionSpy = sandbox.spy(robot, 'setPosition');
        const setLostSpy = sandbox.spy(robot, 'setLost');

        InstructionForward.execute({ grid, robot });
        setPositionSpy.calledOnce.should.equal(true);
        setPositionSpy.calledWith({ x: 1, y: 3 }).should.equal(true);
        setLostSpy.called.should.equal(false);
        setScentedPositionSpy.called.should.equal(false);
      });

      it('should update robot position from (3,3,S)', () => {
        const robot = new Robot({ x: 3, y: 3, orientation: 'S' });

        const setPositionSpy = sandbox.spy(robot, 'setPosition');
        const setLostSpy = sandbox.spy(robot, 'setLost');

        InstructionForward.execute({ grid, robot });
        setPositionSpy.calledOnce.should.equal(true);
        setPositionSpy.calledWith({ x: 3, y: 2 }).should.equal(true);
        setLostSpy.called.should.equal(false);
        setScentedPositionSpy.called.should.equal(false);
      });

      it('should update robot position from (3,0,W)', () => {
        const robot = new Robot({ x: 3, y: 0, orientation: 'W' });

        const setPositionSpy = sandbox.spy(robot, 'setPosition');
        const setLostSpy = sandbox.spy(robot, 'setLost');

        InstructionForward.execute({ grid, robot });
        setPositionSpy.calledOnce.should.equal(true);
        setPositionSpy.calledWith({ x: 2, y: 0 }).should.equal(true);
        setLostSpy.called.should.equal(false);
        setScentedPositionSpy.called.should.equal(false);
      });
    })
  });
});