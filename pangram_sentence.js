// Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise. A pangram is a sentence where every letter of the English alphabet appears at least once.

function pangram(sent) {
    let result
    let alphabet =  "abcdefghijklmnopqrstuvwxyz";
    let lowercase = sent.toLocaleLowerCase()

    for (let i=0; i<alphabet.length; i++){
        if(!lowercase.includes(alphabet[i])){
            result = "false"
            break
        } else {
            result = "true"
        }
    }
    return result
}

console.log(pangram("thequickbrojwnfoxumpsoverthelazydog"))