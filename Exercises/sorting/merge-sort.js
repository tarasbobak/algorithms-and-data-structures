function mergeSort(array) {
  const arrLength = array.length;

  if (arrLength < 2) {
    return array;
  }

  const middle = Math.floor(arrLength / 2);
  const leftPart = array.slice(0, middle);
  const rightPart = array.slice(middle);

  return merge(
    mergeSort(leftPart),
    mergeSort(rightPart)
  );
}

function merge(leftArr, rightArr) {
  const resultArr = [];
  const leftArrLength = leftArr.length;
  const rightArrLength = rightArr.length;
  let leftIdx = 0;
  let rightIdx = 0;

  while (leftIdx < leftArrLength && rightIdx < rightArrLength) {
    if (leftArr[leftIdx] < rightArr[rightIdx]) {
      resultArr.push(leftArr[leftIdx]);
      leftIdx++;
    } else {
      resultArr.push(rightArr[rightIdx]);
      rightIdx++;
    }
  }

  return resultArr
    .concat(leftArr.slice(leftIdx))
    .concat(rightArr.slice(rightIdx));
}
