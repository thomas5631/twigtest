/**
 * Divides a given array into a given number of arrays.
 * @param {[any]} inputArray - An input array of any type.
 * @param {number} numberOfDivisions - The number of divisions (positive integer)
 * @returns {[any]} The given array in the specified divisions
 */
function arrayDivider(inputArray, numberOfDivisions) {
  if (!Array.isArray(inputArray) || numberOfDivisions !== parseInt(numberOfDivisions, 10) || numberOfDivisions !== Math.abs(numberOfDivisions)) {
    throw new Error('A valid input array and number of divisions (positive integer) must be provided');
  } else {
    let lengthOfSubarrays;
    if (numberOfDivisions === 1) {
      lengthOfSubarrays = inputArray.length;
    } else if (numberOfDivisions >= inputArray.length) {
      lengthOfSubarrays = 1;
    } else {
      lengthOfSubarrays = Math.floor(inputArray.length / numberOfDivisions);
      const dividedCount = (lengthOfSubarrays * numberOfDivisions - 1);
      const finalEntryLength = inputArray.length - dividedCount;
      if (finalEntryLength >= numberOfDivisions) {
        lengthOfSubarrays = lengthOfSubarrays + 1;
      }
    }

    let result = [];
    let remainder = inputArray;
    let i;

    for (i = 0; i < numberOfDivisions; i++) {
      if (i === numberOfDivisions -1 || remainder.length === 0) {
        result.push(remainder);
      } else {
        result.push(remainder.slice(0, lengthOfSubarrays));
        remainder = remainder.slice(lengthOfSubarrays);
      }
    }

    return result;
  }
}

module.exports = {
  arrayDivider
};
