// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

maxChar = str => {
    let countChars = {}
    let strArr = [...str]
    for (let el of strArr) {
        countChars[el] = (countChars[el] || 0) + 1
    }
    console.log(countChars)
    return Object.keys(countChars).reduce((a, b) => 
    countChars[a] > countChars[b] ? a : b)
}

maxChar("abcccccccd")

module.exports = maxChar;
