/* Find duplicate letters from the string
*/

function duplicates(str) {
    let result = {};

    for (let i=0; i<str.length; i++){
        let count = 0
        for (let j=i+1; j<str.length; j++){
            if (str[i].match(/^[A-Za-z]+$/) && str[i] === str[j]){
                count++
                result[str[i]] = count
            }
        }
    }
    return Object.keys(result)
}

console.log(duplicates("hello, worlddl, d"))