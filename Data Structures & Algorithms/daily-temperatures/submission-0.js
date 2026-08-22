class Solution {
  /**
   * @param {number[]} temperatures
   * @return {number[]}
   */
  dailyTemperatures(temperatures) {
    let isThereHigher = false;
    const days = [];

    for (let i = 0; i < temperatures.length; i++) {
      const currTemp = temperatures[i];
      let daysBeforeNextHighTemp = 1;
      isThereHigher = false;
      for (let j = i + 1; j < temperatures.length; j++) {
        const futureTemp = temperatures[j];

        // console.log(`present ${currTemp}`);
        // console.log(`future ${futureTemp}`);
        if (futureTemp > currTemp) {
          days.push(daysBeforeNextHighTemp);
          isThereHigher = true;
          break;
        } else {
          daysBeforeNextHighTemp++;
        }
      }

      if (!isThereHigher) {
        days.push(0);
      }
    }

    console.log(days);
    return days;
  }
}

const temperatures = [30, 38, 30, 36, 35, 40, 28];

sol = new Solution();
sol.dailyTemperatures(temperatures);
