/* A sentence is a list of words that are separated by a single space with no leading or trailing spaces.

For example, "Hello World", "HELLO", "hello world hello world" are all sentences.
Words consist of only uppercase and lowercase English letters. Uppercase and lowercase English letters are considered different.

A sentence is circular if:

The last character of a word is equal to the first character of the next word.
The last character of the last word is equal to the first character of the first word.
For example, "leetcode exercises sound delightful", "eetcode", "leetcode eats soul" are all circular sentences. However, "Leetcode is cool", "happy Leetcode", "Leetcode" and "I like Leetcode" are not circular sentences.

Given a string sentence, return true if it is circular. Otherwise, return false.
*/

function circular(sentence) {

    sentence = sentence.toLowerCase()
    let words = sentence.split(' ')
    let first = ""
    let last = ""
    
    for (let i=0; i<words.length; i++){

        if (words.length === 1) {
            first = words[i][0]
            last = words[i][words[i].length-1]
            return first === last
        } else if (words.length > 1) {
            first = words[i+1][0]
            last = words[i][words[i].length-1]
            return last === first
        } else {
            return false
        }
    }
}

console.log(circular("Helloh"))
