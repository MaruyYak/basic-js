const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let string = '';

  let repeatTimes = options.repeatTimes || 1;
  let separator = options.separator || '+';
  let addition = ('addition' in options) ? options.addition : '';
  let additionRepeatTimes = options.additionRepeatTimes || 1;
  let additionSeparator = options.additionSeparator || '|';

  str = String(str);
  addition = String(addition);

  for (let i = 0; i < repeatTimes; i += 1) {
    string += str;

    for (let j = 0; j < additionRepeatTimes; j += 1) {
      string += addition;
      if (j < additionRepeatTimes - 1) {
        string += additionSeparator;
      }
    }

    if (i < repeatTimes - 1) {
      string += separator;
    }
  }

  return string;

}

module.exports = {
  repeater
};
