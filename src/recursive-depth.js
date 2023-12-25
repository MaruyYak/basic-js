const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
  class DepthCalculator {
    max = 0;
    maxNow = 0;
    response = undefined;

    calculateDepth(arr) {
      this.maxNow += 1;
      if (this.maxNow > this.max) {
        this.max = this.maxNow;
      }
      for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
          this.calculateDepth(arr[i]);
        }
      }
      this.maxNow--;
      if (this.maxNow === 0) {
        this.response = this.max;
        this.max = 0;
        this.maxNow = 0;
        return this.response;
      }
    }
  }

module.exports = {
  DepthCalculator
};
