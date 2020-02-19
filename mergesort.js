function split(wholeArray) {
    let halfLength = Math.ceil(wholeArray.length/2)
    const firstHalf = wholeArray.slice(0, halfLength)
    const secondHalf = wholeArray.slice(halfLength, wholeArray.length+1)
  return [firstHalf, secondHalf];
}

function merge(doubleArr) {
const firstHalf = doubleArr[0]
const secondHalf = doubleArr[1]
  let totalLength = firstHalf.length + secondHalf.length;
  let wholeArray = [];
  while (wholeArray.length < totalLength) {
    if (firstHalf[0] && secondHalf[0]) {
      if (firstHalf[0] <= secondHalf[0]) {
        //if first index of firstHalf is greater
        wholeArray.push(firstHalf.shift()); 
      } else {
        //if first index of firstHalf is lesser
        wholeArray.push(secondHalf.shift());
      }
    }
    if (firstHalf[0] && !secondHalf[0]){
        //if firstHalf exists but secondHalf does not
        wholeArray.push(firstHalf.shift());
    }
    if (!firstHalf[0] && secondHalf[0]){
        //if secondHalf exists but firstHalf does not
        wholeArray.push(secondHalf.shift());
    }
  }
  return wholeArray;
}

function mergeSort(array) {
    if (array.length <= 1){
        return array
    }
    let doubleArr = split(array)
    return merge([mergeSort(doubleArr[0]), mergeSort(doubleArr[1])])
}
