// Filter numbers from the string

function  getNumbers(str) {
    let numbers = ""

    for (let i=0; i<str.length; i++) {
        if (str[i] === " ") {
            continue
        } else if (str[i] === "-" && !isNaN(str[i+1])){
            numbers += str[i]
        } else if (!isNaN(str[i])){
            numbers += str[i]
        }
    }
    return numbers
}

console.log(getNumbers("Sampll -32.3435 Stringrfd 232-32ftesd3454!"));


function numsList(str) {

    let result = []
    let nums_list = []
    let new_num = ""

    for (let i=0; i<str.length; i++) {
        if (str[i] === "-") {
            new_num += str[i]
        } else if(str[i] === "." && !isNaN(str[i-1]) && str[i-1] != " ") {
            new_num += str[i]
        } else if (isNaN(str[i])) {
            new_num += "/"
        } else if (!isNaN(str[i])) {
            new_num += str[i]
        }
    }

    nums_list = new_num.split("/")

    for (let i=0; i<nums_list.length; i++){
        nums_list[i] = parseFloat(nums_list[i]);
        if (!isNaN(nums_list[i])) {
            result.push(nums_list[i])
        }
    }

    return result
}

console.log(numsList("Sample -32.3435 String rfd232 -.32.ftesd3454!"))
