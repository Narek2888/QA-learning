
// A pangram is a sentence where every letter of the English alphabet appears at least once.

// Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise.

 

// Example 1:

// Input: sentence = "thequickbrownfoxjumpsoverthelazydog"
// Output: true

let alphabet = "abcdefghijklmnopqrstuvwxyz"

let sentence = "thequickbrownfoxjumsoverthelazydog"
let result 
for (let i = 0; i < alphabet.length; i++) {
    if (!sentence.includes(alphabet[i])) {
        result = "false"
        break
    } else (
        result = "true"
    )
}
console.log(result)