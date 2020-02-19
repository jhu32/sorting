const bubbleSort = array => {
  if (array.length <= 1) {
    return array;
  }

  return swap(array);
};

const swap = array => {
  let swapToggle = false;
  let cloneArr = array;
  let higherValue = 0;
  let cloneArrLength = cloneArr.length;
  console.log('cloneArrLength is: ', cloneArrLength)
  do {
    swapToggle = false;
    for (let i = 0; i < cloneArrLength - 1; i++) {
      if (cloneArr[i] > cloneArr[i + 1]) {
        higherValue = cloneArr[i]; //save higher value
        cloneArr[i] = cloneArr[i + 1]; //set first index to lower value
        cloneArr[i + 1] = higherValue; //set second index to higher value
        swapToggle = true;
      }
    }
    if (swapToggle === false) {
      return cloneArr;
    }
    cloneArrLength--;
  } while (cloneArrLength >= 2);
  return cloneArr;
};
