let a = [2, 4, 5, 9]

// let sum = 0
let obj = {}

a.forEach(function (i, index) { // we can use arrow (=>) instead of function - (i => {})
    console.log(i, index)
    obj[index] = i
    // sum += i
})

// console.log("The sum is", sum)
console.log(obj)