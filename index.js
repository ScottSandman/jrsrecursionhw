// 1. Write a JavaScript program to calculate the factorial of a number.
// In mathematics, the factorial of a non - negative integer n, denoted by n!, is the product of all positive integers less than or equal to n.For example, 5! = 5 x 4 x 3 x 2 x 1 = 120

function recursiveFactorial(x) {
  if (x === 1) {
    return x;
  }
  return recursiveFactorial(x - 1) * x;
}
console.log(recursiveFactorial(4));
console.log(recursiveFactorial(7));

// 2. Write a JavaScript program to find the greatest common divisor(gcd) of two positive numbers.

function greatestCommonDivisor(x, y) {
  if (y === 0) {
    return x;
  }
  return greatestCommonDivisor(y, x % y);
}
console.log(greatestCommonDivisor(48, 36));

// 3. Write a JavaScript program to get the integers in range(x, y).
//     Example : range(2, 9)
// Expected Output: [3, 4, 5, 6, 7, 8]

function range(start, end) {
  if (end === start) {
    return start;
  } else {
    return [start++].concat(range(start, end));
  }
}

console.log(range(2, 9));

// 4. Write a JavaScript program to compute the sum of an array of integers.
//     Example : var array = [1, 2, 3, 4, 5, 6]

// Expected Output: 21

function sum(arr) {
  if (arr.length === 0) {
    return 0;
  } else {
    return arr[0] + sum(arr.slice(1));
  }
}

console.log(sum([1, 2, 3, 4, 5, 6]));

// 5. Write a JavaScript program to compute the exponent of a number.
//     Note : The exponent of a number says how many times the base number is used as a factor. 82 = 8 x 8 = 64. Here 8 is the base and 2 is the exponent.

function computeExponent(num, base) {
  if (base === 0) {
    return 1;
  } else {
    return num * computeExponent(num, base - 1);
  }
}

console.log(computeExponent(8, 4));

// 6. Write a JavaScript program to get the first n Fibonacci numbers.
//     Note : The Fibonacci Sequence is the series of numbers: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, . . .Each subsequent number is the sum of the previous two.

function fibonacci(n) {
  if (n < 2) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

console.log(fibonacci(7));

// 7. Write a JavaScript program to check whether a number is even or not.

function isEven(n) {
  while (n >= 0) {
    if (n === 0) {
      return true;
    } else {
      return isEven(n - 2);
    }
  }
  return false;
}

console.log(isEven(8));
console.log(isEven(9));

// 8. Write a JavaScript program for binary search.Go to the editor
// Sample array: [0, 1, 2, 3, 4, 5, 6]
// console.log(l.br_search(5)) will return '5'

function binarySearch(arr, num, min, max) {
  if (min === undefined) {
    min = 0;
  }
  if (max === undefined) {
    max = arr.length;
  }
  if (min === max) {
    return min;
  } else {
    let mid = Math.floor((min + max) / 2);
    if (arr[mid] < num) {
      min = mid;
      return binarySearch(arr, num, min, max);
    } else if (arr[mid] > num) {
      max = mid;
      return binarySearch(arr, num, min, max);
    } else {
      return mid;
    }
  }
}

console.log(binarySearch([0, 1, 2, 3, 4, 5, 6], 5));
console.log(binarySearch([1, 2, 3, 4, 5, 6], 2));

// 9. Write a merge sort program in JavaScript.
// Sample array: [34, 7, 23, 32, 5, 62]
// Sample output: [5, 7, 23, 32, 34, 62]

function merge(arr, start, mid, end) {
  let size1 = mid - start + 1;
  let size2 = end - mid;
  let left = new Array(size1);
  let right = new Array(size2);

  for (let i = 0; i < size1; i++) {
    left[i] = arr[start + i];
  }
  for (let j = 0; j < size2; j++) {
    right[j] = arr[mid + 1 + j];
  }

  let i = 0;
  let j = 0;
  let k = start;

  while (i < size1 && j < size2) {
    if (left[i] <= right[j]) {
      arr[k] = left[i];
      i++;
    } else {
      arr[k] = right[j];
      j++;
    }
    k++;
  }

  while (i < size1) {
    arr[k] = left[i];
    i++;
    k++;
  }

  while (j < size2) {
    arr[k] = right[j];
    j++;
    k++;
  }
  console.log(arr);
}

function mergeSort(arr, start, end) {
  if (start === undefined) {
    start = 0;
  }
  if (end === undefined) {
    end = arr.length - 1;
  }
  if (start < end) {
    let mid = Math.floor((start + end) / 2);
    mergeSort(arr, start, mid);
    mergeSort(arr, mid + 1, end);
    merge(arr, start, mid, end);
  }
}

console.log(mergeSort([34, 7, 23, 32, 5, 62]));
