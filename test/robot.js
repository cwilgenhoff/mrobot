import sinon from 'sinon';
import chai from 'chai';
chai.should();

import Robot from '../src/robot';


describe('Robot', () => {
  let robot;
  let sandbox;

  beforeEach(() => {
    robot = new Robot();
    sandbox = sinon.sandbox.create({ useFakeServer: false });
  });

  it('should exist', () => {
    robot.should.exist;
  });

  it('should have a default position (0, 0, N)', () => {
    robot.position.x.should.be.equal(0);
    robot.position.y.should.be.equal(0);
    robot.orientation.should.be.equal('N');
  });

  it('should set its position', () => {
    robot.setPosition({ x: 1, y: 1 });
    robot.position.x.should.be.equal(1);
    robot.position.y.should.be.equal(1);
    robot.orientation.should.be.equal('N');
  })

  it('should set its orientation', () => {
    robot.setOrientation('E');
    robot.position.x.should.be.equal(0);
    robot.position.y.should.be.equal(0);
    robot.orientation.should.be.equal('E');
  })

  it('should set as lost', () => {
    robot.setLost();
    robot.isLost.should.equal(true);
  });
});
