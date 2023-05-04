//get fib number

function fibonacci(n) {
	if (n == 1) {
		return 0;
	} else if (n == 2) {
		return 1;
	} else {
		return fibonacci(n - 1) + fibonacci(n - 2);
	}
}

//better function

function fibonacciArray(length, firstNumber = 0, secondNumber = 1, myArray = []) {
    if (length === 0) {
        return myArray;
    }
    myArray.push(firstNumber);
    return fibonacciArray(length - 1, secondNumber, firstNumber + secondNumber, myArray);
}

//merge sort recursive

function mergeSort(array) {
    if (array.length <= 1) {
      return array;
    }
    
    const middleIndex = Math.floor(array.length / 2);
    const leftArray = array.slice(0, middleIndex);
    const rightArray = array.slice(middleIndex);
    
    const sortedLeft = mergeSort(leftArray);
    const sortedRight = mergeSort(rightArray);
    
    return merge(sortedLeft, sortedRight);
  }
  
  function merge(leftArray, rightArray) {
    const sortedArray = [];
    
    while (leftArray.length && rightArray.length) {
      if (leftArray[0] < rightArray[0]) {
        sortedArray.push(leftArray.shift());
      } else {
        sortedArray.push(rightArray.shift());
      }
    }
    
    return sortedArray.concat(leftArray.slice().concat(rightArray.slice()));
  }
  

console.log(mergeSort([4, 3, 6, 7, 1, 4, 9, 3, 6, 1, 8, 3, 7]))