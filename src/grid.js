class Grid {
  constructor(maxValueCoordinate = 50) {
    this.maxValueCoordinate = maxValueCoordinate;
    this.maxPoint = { x: 0, y: 0 };
    this.scentedPositions = [];
  }

  isOutsideGrid(point) {
    return point.x > this.maxValueCoordinate || point.y > this.maxValueCoordinate;
  }

  isPositionScented(position) {
    return this.scentedPositions.includes(position);
  }

  setScentedPosition(position) {
    this.scentedPositions = [
      ...this.scentedPositions,
      { ...position },
    ]
  }

  setMaxPoint = (point) => {
    if (this.isOutsideGrid(point)) {
      return;
    }

    this.maxPoint = { ...point };
  }
}

export default Grid;
