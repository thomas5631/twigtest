const expect = require('expect');

const { arrayDivider } = require('../src/ArrayDivider');

describe('Throws errors when given incorrect inputs', () => {
  it('throws error when passed an object instead of an array', () => {
    const inputArray = 3;
    const inputInteger = 3;
    expect(() => {
      arrayDivider(inputArray, inputInteger);
    }).toThrow(new Error('A valid input array and number of divisions (positive integer) must be provided'));
  });

  it('throws error when passed a float as the divisor', () => {
    const inputArray = [1, 2, 3, 4, 5];
    const inputInteger = 3.1;
    expect(() => {
      arrayDivider(inputArray, inputInteger);
    }).toThrow(new Error('A valid input array and number of divisions (positive integer) must be provided'));
  });

  it('throws error when passed an array as the divisor', () => {
    const inputArray = [1, 2, 3, 4, 5];
    const inputInteger = [3];
    expect(() => {
      arrayDivider(inputArray, inputInteger);
    }).toThrow(new Error('A valid input array and number of divisions (positive integer) must be provided'));
  });

  it('throws error when passed a negative number as the divisor', () => {
    const inputArray = [1, 2, 3, 4, 5];
    const inputInteger = -1;
    expect(() => {
      arrayDivider(inputArray, inputInteger);
    }).toThrow(new Error('A valid input array and number of divisions (positive integer) must be provided'));
  });
});

describe('Returns the desired output', () => {
  it('replicates given example', () => {
    const inputArray = [1, 2, 3, 4, 5];
    const inputInteger = 3;
    expect(arrayDivider(inputArray, inputInteger)).toEqual([[1, 2], [3, 4], [5]]);
  });

  it('works for strings', () => {
    const inputArray = ['one', 'two', 'three', 'four', 'five'];
    const inputInteger = 3;
    expect(arrayDivider(inputArray, inputInteger)).toEqual([['one', 'two'], ['three', 'four'], ['five']]);
  });

  it('works for objects', () => {
    const inputArray = [{ string: 'one', int: 1 }, { string: 'two', int: 2 }, { string: 'three', int: 3 }, { string: 'four', int: 4 }];
    const inputInteger = 3;
    expect(arrayDivider(inputArray, inputInteger)).toEqual([
      [{ string: 'one', int: 1 }],
      [{ string: 'two', int: 2 }],
      [{ string: 'three', int: 3 }, { string: 'four', int: 4 }]
    ]);
  });

  it('allows input integer to be one', () => {
    const inputArray = [1, 2, 3, 4, 5];
    const inputInteger = 1;
    expect(arrayDivider(inputArray, inputInteger)).toEqual([[1, 2, 3, 4, 5]]);
  });

  it('allows input integer to be larger than length of array', () => {
    const inputArray = [1, 2, 3, 4, 5];
    const inputInteger = 6;
    expect(arrayDivider(inputArray, inputInteger)).toEqual([[1], [2], [3], [4], [5], []]);
  });

  it('allows input integer to equal the length of array', () => {
    const inputArray = [1, 2, 3, 4, 5];
    const inputInteger = 5;
    expect(arrayDivider(inputArray, inputInteger)).toEqual([[1], [2], [3], [4], [5]]);
  });

  it('allows input array of length 0', () => {
    const inputArray = [];
    const inputInteger = 5;
    expect(arrayDivider(inputArray, inputInteger)).toEqual([[], [], [], [], []]);
  });
});
