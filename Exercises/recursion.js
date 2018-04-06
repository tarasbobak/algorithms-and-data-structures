//1. Write a function that loops through the numbers n down to 0. If you haven't done so try using a while loop to do this.
function iterateNumbers(count) {
  while(count) {
    console.log(count);

    count--;
  }
}
//2. Next, try looping just like above except using recursion
function iterateNumbers(count) {
  if (count) {
    console.log(count);

    return iterateNumbers(count - 1);
  }
}
//3.Write a function 'exponent' that takes two arguments base, and expo, uses a while loop to return the exponenet value of the base.
function exponent(base, expo) {
  let res = base;

  while(expo > 1) {
    res = res * base;
    expo--;
  }

  return res;
}
//4. Write a function 'recursiveExponent' that takes two arguments base, and expo, recursively returns exponent value of the base.
function recursiveExponent() {
  if (expo === 1) {
    return base;
  } else {
    return base * exponent(base, expo - 1);
  }
}
//5. Write a function 'recursiveMultiplier' that takes two arguments, 'arr and num', and multiplies each arr value into by num and returns an array of the values.
function recursiveMultiplier(arr, num) {
  const arrLength = arr.length;
  let index = 0;

  multiply(arr, num, index)

  function multiply(arr, num, index) {
    if (index < arrLength) {
      arr[index] = arr[index] * num;

      multiply(arr, num, ++index);
    }
  }

  return arr;
}
//6. Write a function 'recursiveReverse' that takes an array and uses recursion to return its contents in reverse
function recursiveReverse(array) {
  const arrayLength = array.length;
  let reversedArray = [];
  let index = 0;


  iterate(array, reversedArray, index, arrayLength);

  function iterate(originalArr, resultArray, index, arrayLength) {
    if (index < arrayLength) {
      resultArray[arrayLength - 1 - index] = originalArr[index];

      iterate(originalArr, resultArray, ++index, arrayLength);
    }
  }

  return reversedArray;
}

function recursiveArray(array) {
  const reversedArr = [];

  function traverse(originalArray) {
    if (originalArray.length) {
      reversedArr.push(originalArray.pop());
      traverse(originalArray);
    }
    return;
  }

  traverse(array);

  return reversedArr;
}
//7. Write a function that outputs the nth Fibonnaci number.
function fibonacci(n) {
  if (n === 0) {
    return 0;
  }

  function recursive(n) {
    if (n === 1 || n === 2) {
      return 1;
    }

    return recursive(n-1) + recursive(n-2);
  }

  return recursive(n);
}