function bubble(array) {
  const arrLength = array.length;

  for (let i = 0; i < arrLength; i++) {
    for (let k = 0; k < arrLength - i; k++) {
      if (array[k] > array[k+1]) {
        const temp = array[k];

        array[k] = array[k+1];
        array[k+1] = temp;
      }
    }
  }

  return array;
}
