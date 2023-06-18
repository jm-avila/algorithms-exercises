/*

  Implement a radix sort in a function called radixSort.

  You'll probably need several functions
  
  You can implement it using a binary or decimal based bucketing but I'd recommend the decimal based buckets because
  it ends up being a lot more simple to implement.

*/

const getLongestNumberLength = (array) => {
  let greatestLength = 0;
  array.forEach((num) => {
    const numLength = num.toString().length;
    if (numLength > greatestLength) {
      greatestLength = numLength;
    }
  });
  return greatestLength;
};

function radixSort(array) {
  const longestNumberLength = getLongestNumberLength(array);
  const buckets = Array.from(
    {
      length: 10, // base 10
    },
    () => []
  );

  for (let i = 0; i < longestNumberLength; i++) {
    while (array.length) {
      const item = array.shift().toString();
      const bucketIndex = item[item.length - 1 - i] || 0;
      buckets[bucketIndex].push(+item);
    }
    for (let j = 0; j < buckets.length; j++) {
      array.push(...buckets[j]);
      buckets[j] = [];
    }
  }

  return array;
}

// unit tests
// do not modify the below code
describe("radix sort", function () {
  it("should sort correctly", () => {
    const nums = [
      20, 51, 3, 801, 415, 62, 4, 17, 19, 11, 1, 100, 1244, 104, 944, 854, 34,
      3000, 3001, 1200, 633,
    ];
    const ans = radixSort(nums);
    expect(ans).toEqual([
      1, 3, 4, 11, 17, 19, 20, 34, 51, 62, 100, 104, 415, 633, 801, 854, 944,
      1200, 1244, 3000, 3001,
    ]);
  });
  it("should sort 99 random numbers correctly", () => {
    const fill = 99;
    const nums = new Array(fill)
      .fill()
      .map(() => Math.floor(Math.random() * 500000));
    const ans = radixSort(nums);
    expect(ans).toEqual(nums.sort());
  });
});
