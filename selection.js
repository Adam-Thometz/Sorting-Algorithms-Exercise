function selectionSort(arr) {
  if (arr.length <= 1) return arr
  for (let i = 0; i < arr.length; i++) {
    let min = arr[i]
    let minIdx = i
    let swapped = false
    for (let j = i+1; j < arr.length; j++) {
      if (arr[j] < min) {
        min = arr[j]
        minIdx = j
        swapped = true
      }
    }
    if (swapped) {
      let temp = arr[minIdx]
      arr[minIdx] = arr[i]
      arr[i] = temp
      
    }
  }
  return arr
}

module.exports = selectionSort;