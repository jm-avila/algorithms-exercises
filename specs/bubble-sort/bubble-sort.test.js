/*
  Write a bubble sort here
  Name the function bubbleSort
  Return the sorted array at the end
  
  To run the tests, change the `test.skip(…)` below to `test(…)`
  
  Bubble sort works by comparing two adjacent numbers next to each other and then
  swapping their places if the smaller index's value is larger than the larger
  index's. Continue looping through until all values are in ascending order
*/

function bubbleSort(nums) {
  let swap = false;
  let done = false;
  let currentIndex = 0;
  let lastIndex = nums.length - 1;
  while (!done) {
    const currentItem = nums[currentIndex];
    const nextItem = nums[currentIndex + 1];

    if (currentItem > nextItem) {
      nums[currentIndex] = nextItem;
      nums[currentIndex + 1] = currentItem;
      swap = true;
    }

    if (currentIndex === lastIndex && !swap) {
      done = true;
    }

    if (currentIndex === lastIndex) {
      swap = false;
      lastIndex = currentIndex - 1;
      currentIndex = 0;
    } else {
      currentIndex++;
    }
  }

  return nums;
}

// unit tests
// do not modify the below code
test("bubble sort", function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  const sortedNums = bubbleSort(nums);
  console.log(sortedNums);
  expect(sortedNums).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
