// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// const chunk = (arr, size) => {
//     let newArr = []
//     let last 

//     for(let el of arr) {
//         last = newArr[newArr.length - 1]
//         if (!last || last.length === size) {
//             newArr.push([el])
//         } else {
//             last.push(el)
//         }
//     } 
//     return newArr
// }

const chunk = (arr, size) => {
    let newArr = []
    let index = 0

    while (index < arr.length) {
        newArr.push(arr.slice(index, index + size))
        index += size
    }
    return newArr
}

module.exports = chunk;
