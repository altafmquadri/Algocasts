// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// vowels = str => {
//     let vowelsHash = { a: 0, e: 0, i: 0, o: 0, u: 0 }
//     // let cleanStr = str.replace(/[^\w]/g, '').toLowerCase()

//     for (let el of str.toLowerCase()) {
//         if (el in vowelsHash) {
//             vowelsHash[el]++
//         }
//     }
//     return Object.values(vowelsHash).reduce((acc, i) => acc + i, 0)
// }

vowels = str => {
    const matches = str.match(/[aeiou]/gi)
    return matches ? matches.length : 0
}

module.exports = vowels;
