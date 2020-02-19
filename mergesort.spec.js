describe("Split Array function", function() {
  it("is able to split an array into two halves", function() {
    expect(split([1, 2])).toEqual([[1], [2]]);
    // your code here
  });
  it("is able to split an array with odd numbers", function() {
    expect(split([1, 2, 3])).toEqual([[1, 2], [3]]);
    // your code here
  });
});

describe("Merge function", function() {
  it("is able to merge two sorted arrays into one sorted array", function() {
    expect(merge([[1, 2], [3, 4]])).toEqual([1, 2, 3, 4]);
    expect(merge([[3, 7, 9], [1, 4, 6, 10]])).toEqual([1, 3, 4, 6, 7, 9, 10])
    // test the merging algorithm
  });
});

describe("mergeSort function", function() {
    it("sorts array", function() {
      expect(mergeSort([9, 7, 5, 3, 1])).toEqual([1, 3, 5, 7, 9]);
      // your code here
    });
});