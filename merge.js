function merge(arr1, arr2) {
  const result = []
  let a = 0
  let b = 0
  while (a < arr1.length && b < arr2.length) {
    if (arr1[a] < arr2[b]) {
      result.push(arr1[a])
      a++
    } else {
      result.push(arr2[b])
      b++
    }
  }
  while (a < arr1.length) {
    result.push(arr1[a])
    a++
  }
  while (b < arr2.length) {
    result.push(arr2[b])
    b++
  }
  return result
}

function mergeSort(arr) {
  // base case
  if (arr.length <= 1) return arr
  // normal case
  const mid = Math.floor(arr.length / 2)
  const left = mergeSort(arr.slice(0, mid))
  const right = mergeSort(arr.slice(mid))
  return merge(left, right)
}

module.exports = { merge, mergeSort};