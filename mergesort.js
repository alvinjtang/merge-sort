// O(n)
function split (wholeArray) {
  const firstHalf = wholeArray.slice(0,wholeArray.length/2);
  const secondHalf = wholeArray.slice(wholeArray.length/2);
  return [firstHalf, secondHalf];
}

// O(log(n))
function merge (arr1, arr2) {
  let result = [];
  let leftHead = 0;
  let rightHead = 0;

  while (leftHead < arr1.length && rightHead < arr2.length) {
    if (arr1[leftHead] < arr2[rightHead]) {
      result.push(arr1[leftHead]);
      leftHead++;
    } else {
      result.push(arr2[rightHead]);
      rightHead++;
    }
  }
  return result.concat(arr1.slice(leftHead)).concat(arr2.slice(rightHead));
}

function mergeSort (array) {
  if (array.length === 1) {
    return array;
  }
  let splitArray = split(array);
  return merge(mergeSort(splitArray[0]),mergeSort(splitArray[1]));
}
