const swap = (arr, a, b) => {
    let temp = arr[a]
    arr[a] = arr[b]
    arr[b] = temp
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

console.log(merge([-30, 22], [0, 97]))
// console.log(merge([100, -40, 500, -124, 0, 21, 7]))
// console.log(merge([5, 6, 7, 8, 9, 7, 21]))
