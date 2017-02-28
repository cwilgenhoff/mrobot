import chai from 'chai';
chai.should();


import Grid from '../src/grid';
import Robot from '../src/robot';

describe('Grid', () => {
  let grid;
  let sandbox;

  beforeEach(() => {
    grid = new Grid();
  });

  it('should exist', () => {
    grid.should.exist;
  });

  it('should set maximum point', () => {
    grid.setMaxPoint({ x: 5, y: 3 });
    grid.maxPoint.x.should.be.equal(5);
    grid.maxPoint.y.should.be.equal(3);
  });

  it('should not set maximum point if x coordinate is greater than 50', () => {
    grid.setMaxPoint({ x: 51, y: 3 });
    grid.maxPoint.x.should.be.equal(0);
    grid.maxPoint.y.should.be.equal(0);
  });

  it('should not set maximum point if y coordinate is greater than 50', () => {
    grid.setMaxPoint({ x: 5, y: 51 });
    grid.maxPoint.x.should.be.equal(0);
    grid.maxPoint.y.should.be.equal(0);
  });

  it('should set position as scented', () => {
    grid.setMaxPoint({ x: 5, y: 51 });
    grid.setScentedPosition({ x: 5, y: 5});
    grid.isScentedPosition({ x: 5, y: 5}).should.equal(true);
  });

  it('should not have a position as scented', () => {
    grid.setMaxPoint({ x: 5, y: 51 });
    grid.isScentedPosition({ x: 5, y: 5}).should.equal(false);
  });

  it('should check if a point is outside the grid', () => {
    grid.setMaxPoint({ x: 0, y: 0 });
    grid.isOutsideGrid({ x: 1, y: 1}).should.equal(true);
    grid.isOutsideGrid({ x: 0, y: 1}).should.equal(true);
    grid.isOutsideGrid({ x: 1, y: 0}).should.equal(true);
    grid.isOutsideGrid({ x: 0, y: 0}).should.equal(false);
  });
});
