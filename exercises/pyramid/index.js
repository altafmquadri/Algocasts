// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// pyramid = n => {
//     const midpoint = Math.floor((2 * n - 1)/2)
//     for (let r=0; r<n; r++) {
//         let level = ''
//         for (let c=0; c < 2*n-1; c++) {
//             if (midpoint - r <=c && midpoint + r >= c) {
//                 level += '#'
//             } else {
//                 level+= ' '
//             }
//         }
//         console.log(level)
//     }
// }


pyramid = (n, r = 0, level = '') => {
    if (r === n) return
    if (level.length === 2 * n - 1) {
        console.log(level)
        return pyramid(n, r + 1)
    }
    let midpoint = Math.floor((2 * n - 1) / 2)
    if (midpoint - r <= level.length && midpoint + r >= level.length) {
        level += '#'
    } else {
        level += ' '
    }
    pyramid(n, r, level)
}
pyramid(30)
module.exports = pyramid;
