class Grid {
  constructor(maxValueCoordinate = 50) {
    this.maxValueCoordinate = maxValueCoordinate;
    this.maxPoint = { x: 0, y: 0 };
    this.scentedPositions = {};
  }

  isOutsideGrid = (point) => {
    return point.x > this.maxPoint.x || point.y > this.maxPoint.y;
  }

  isOverAllowedMaxPoint(point) {
    return point.x > this.maxValueCoordinate || point.y > this.maxValueCoordinate;
  }

  isScentedPosition = (position) => {
    return this.scentedPositions[`${position.x}-${position.y}`] || false;
  }

  setScentedPosition = (position) => {
    this.scentedPositions = {
      ...this.scentedPositions,
      [`${position.x}-${position.y}`]: true,
    }
  }

  setMaxPoint = (point) => {
    if (this.isOverAllowedMaxPoint(point)) {
      return;
    }

    this.maxPoint = { ...point };
  }
}

export default Grid;
