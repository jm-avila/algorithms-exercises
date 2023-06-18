/*
  Write a function that performs mergesort
  Name the function mergeSort
  It will take in a array of numbers and return a sorted array numbers

  You'll need to write more than just one function
*/

const merge = (listA, listB) => {
  const sortedList = [];
  let listAIndex = 0;
  let listBIndex = 0;
  while (listAIndex < listA.length && listBIndex < listB.length) {
    if (listA[listAIndex] <= listB[listBIndex]) {
      sortedList.push(listA[listAIndex]);
      ++listAIndex;
    } else {
      sortedList.push(listB[listBIndex]);
      ++listBIndex;
    }
  }

  if (listAIndex < listA.length) {
    const restOfListA = listA.slice(listAIndex);
    return sortedList.concat(restOfListA);
  }

  if (listBIndex < listB.length) {
    const restOfListB = listB.slice(listBIndex);
    return sortedList.concat(restOfListB);
  }
  return sortedList;
};

const mergeSort = (nums) => {
  if (nums.length === 1) {
    return nums;
  }
  const middleIndex = Math.floor(nums.length / 2);
  const listA = nums.slice(0, middleIndex);
  const listB = nums.slice(middleIndex);
  return merge(mergeSort(listA), mergeSort(listB));
};

// unit tests
// do not modify the below code
test("merge sort", function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  const ans = mergeSort(nums);
  expect(ans).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
