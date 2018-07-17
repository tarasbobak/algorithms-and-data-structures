// Quick sort implementation when we are picking pivot as the last item in array and sorting
// smaller items to the left of it and larger to the right.
// Partition index tracks the final index when the pivot should land.

function quicksort(array, left, right) {
  if (left < right) {
    const pivotIdx = right;
    const partitionIdx = partition(array, pivotIdx, left, right);

    quicksort(array, left, partitionIdx - 1);
    quicksort(array, partitionIdx + 1, right);
  }

  return array;
}

function partition(array, pivotIdx, left, right) {
  const pivot = array[pivotIdx];
  let partitionIndex = left;

  for (let i = left; i < right; i++) {
    if (array[i] < pivot) {
      swap(array, i, partitionIndex);
      partitionIndex++;
    }
  }

  swap(array, pivotIdx, partitionIndex);
  return partitionIndex;
}

function swap(array, firstIdx, secondIdx) {
  const temp = array[firstIdx];

  array[firstIdx] = array[secondIdx];
  array[secondIdx] = temp;
}

// Quicksort implementation when we are picking pivot as the middle item and having a pointer on each side.
// They are moving towards the middle and when left encounters larger number that pivot is stops.
// Right one stops when it encounters smaller items and then they swap.
// This is how smaller items will be position on the left and larger on the right of the pivot.

function quicksort(array, left, right) {
  const partitionIdx = partition(array, left, right);

  if (left < partitionIdx - 1) {
      quicksort(array, left, partitionIdx - 1);
  }

  if (right > partitionIdx) {
      quicksort(array, partitionIdx, right);
  }

  return array;
}

function partition(array, left, right) {
  const pivotIdx = Math.floor((left + right) / 2);
  const pivot = array[pivotIdx];

  while (left <= right) {
    while(array[left] < pivot) {
      left++;
    }

    while(array[right] > pivot) {
      right--;
    }

    if (left <= right) {
      swap(array, left, right);
      left++;
      right--;
    }
  }

  return left;
}

function swap(array, firstIdx, secondIdx) {
  const temp = array[firstIdx];

  array[firstIdx] = array[secondIdx];
  array[secondIdx] = temp;
}