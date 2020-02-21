// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'


//my solution
// const reverse = (str) => {
//     str = [...str]
//     let reverse = []
//     while (str.length !== 0) {
//         reverse.push(str.pop())
//     }
//     return reverse.join('')
// }

// //alternate 
// const reverse = (str) => {
//     let reversed = ''
//     for (let char of str) {
//         reversed = char + reversed
//     }
//     return reversed
// }

//alternate using reduce

const reverse = (str) => {
    return [...str].reduce((rev, char) => char + rev, '')
}

reverse('altaf')


module.exports = reverse;