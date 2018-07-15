function selection(array) {
  const arrLength = array.length;

  for(let i = 0; i < arrLength; i++) {
    let minIdx = i;

    for(let k = i + 1; k < arrLength; k++) {
      if (array[k] < array[minIdx]) {
        minIdx = k;
      }
    }

    const temp = array[i];
    array[i] = array[minIdx];
    array[minIdx] = temp;
  }

  return array;
}
