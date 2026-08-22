class Solution {
  /**
   * @param {number} target
   * @param {number[]} position
   * @param {number[]} speed
   * @return {number}
   */
  carFleet(target, position, speed) {
    const fleetStack = [];
    const cars = position
      .map((pos, i) => [pos, speed[i]])
      .sort((a, b) => b[0] - a[0]);

    for (const [position, speed] of cars) {
      // console.log(position, speed);

      // automatically appending because a SINGLE CAR is also considered as fleet
      fleetStack.push((target - position) / speed);

      // if two cars already colide they are considered as fleet
      // but instead of using the car before our current car we are iterating at
      // we always use the first one on the fleet
      if (
        fleetStack.length >= 2 &&
        fleetStack[fleetStack.length - 1] <= fleetStack[fleetStack.length - 2]
      ) {
        fleetStack.pop();
      }
    }

    console.log(fleetStack);
    return fleetStack.length;
  }
}

// const target = 10,
//   position = [1, 4],
//   speed = [3, 2];

const target = 10,
  position = [4, 1, 0, 7],
  speed = [2, 2, 1, 1];

// const target = 12,
//   position = [10, 8, 0, 5, 3],
//   speed = [2, 4, 1, 1, 3];
sol = new Solution();
sol.carFleet(target, position, speed);
