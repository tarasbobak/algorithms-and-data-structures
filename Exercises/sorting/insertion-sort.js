function insertion(array) {
  const arrLength = array.length;
  let i; // Unsorted index
  let k; // Sorted index

  for (i = 0; i < arrLength; i++) {
    const value = array[i];

    for (k = i - 1; k > -1 && array[k] > value; k--) {
      array[k + 1] = array[k];
    }

    array[k + 1] = value;
  }

  return array;
}
