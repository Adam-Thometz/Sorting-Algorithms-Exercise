// HELPERS
function getDigit(num, idx) {
  const divided = Math.abs(num) / Math.pow(10, idx)
  const floored = Math.floor(divided)
  const digit = floored % 10

  return digit
}
function digitCount(num) {
  if (num === 0) return 1
  const power = Math.log10(Math.abs(num))
  const floored = Math.floor(power)
  return floored + 1
}
function mostDigits(nums) {
  let maxDigits = 0
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]))
  }
  return maxDigits
}

// MAIN FUNCTION
function radixSort(nums) {
  let maxDigits = mostDigits(nums)

  for (let i = 0; i < maxDigits; i++) {
    let digitBuckets = Array.from({length: 10}, () => [])
    for (let j = 0; j < nums.length; j++) {
      let digitized = getDigit(nums[j], i)
      digitBuckets[digitized].push(nums[j])
    }
    nums = [].concat(...digitBuckets)
  }
  return nums
}

module.exports = {getDigit, digitCount, mostDigits, radixSort};