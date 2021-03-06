function insertionSort(arr) {
  if (arr.length <= 1) return arr
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] < arr[j]) {
        const temp = arr.splice(i, 1)
        arr.splice(j, 0, temp[0])
      }
    }
  }
  return arr
}

module.exports = insertionSort;

// best for nearly sorted data