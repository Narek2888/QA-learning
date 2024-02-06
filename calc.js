let a = parseInt(prompt("enter one number"))
let b = parseInt(prompt("enter the second number"))
let result = 0

let char = prompt("enter one of the following sybols: + - * /")


if (char === "+"){
    result = a + b
    alert(result)
} else if (char === "-"){
    result = a - b
    alert(result)
} else if (char === "*"){
    result = a * b
    alert(result)
} else if (char === "/"){
    result = a / b
    alert(result)
} else if (b === 0){
    alert("Zero division error")
} else (alert("Unknown command"))