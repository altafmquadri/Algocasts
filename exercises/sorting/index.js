// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

const swap = (arr, a, b) => {
    let temp = arr[a]
    arr[a] = arr[b]
    arr[b] = temp
}

const bubbleSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let swapped = null
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) swap(arr, j, j + 1), swapped = true
        }
        if (swapped === null) break
    }
    return arr
}

const selectionSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[minIndex] > arr[j]) {
                minIndex = j
            }
        }
        if (minIndex !== i) swap(arr, minIndex, i)
    }
    return arr
}

const mergeSort = (arr) => {
    if (arr.length <= 1) return arr
    let half = Math.floor(arr.length / 2)
    let left = mergeSort(arr.slice(0, half))
    let right = mergeSort(arr.slice(half))
    return merge(left, right)

}

const merge = (left, right) => {
    let results = []
    while (left.length || right.length) {
        if (left[0] < right[0]) results.push(left.shift())
        else if (left[0] > right[0]) results.push(right.shift())
        else if (left.length === 0) results.push(right.shift())
        else if (right.length === 0) results.push(left.shift())
    }
    return results
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
