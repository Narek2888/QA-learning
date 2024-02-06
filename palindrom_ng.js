// Check if the given string is palindrome, return "true", else, return "false"
// examp. 1:  "level"
// examp. 2: "chair"

function palindrome(string){
    let pure_string = ""
    let reversed = ""

    for (let i=0; i<string.length; i++) {
        if (/^[a-zA-Z]*$/.test(string[i]) ===  true) {
            pure_string += string[i].toLowerCase()
        }
    }
    for (let j=pure_string.length-1;  j>=0; j--) {
        reversed += pure_string[j]
    }
    if (pure_string === reversed) {
        return "true";
    } else {
        return "false";
    }
}

console.log("Is the string palindrome? ",palindrome('Borrow or rob'))
console.log("Is the string palindrome? ",palindrome("Don't nod."))
console.log("Is the string palindrome? ",palindrome("Sir, I demand, I am a maid named Iris."))
console.log("Is the string palindrome? ",palindrome("chair"))