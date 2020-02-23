// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// const anagrams = (stringA, stringB) =>  {
//     stringA = stringA.replace(/[^\w]/g, '').toLowerCase()
//     stringB = stringB.replace(/[^\w]/g, '').toLowerCase()
//     if (stringA.length !== stringB.length) return false

//     let strAhash = {}
//     let strBhash = {}

//     for (let el of stringA) {
//         strAhash[el] = (strAhash[el] || 0) + 1
//     }
//     for (let el of stringB) {
//         strBhash[el] = (strBhash[el] || 0) + 1
//     }
    
//     for (let key in strAhash) {
//         if (strAhash[key] !== strBhash[key]) return false
//     }
//     return true
// }


const anagrams = (stringA, stringB) =>  {

    const cleanString = str => {
        return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('')
    }

    return cleanString(stringA) === cleanString(stringB)
}

anagrams('Hi there', 'Bye there')

module.exports = anagrams;
