// Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc). n = 10 ["call","call", "call"]
// Output: [10,11,12]

function counter(n, arr) {
    let result = []
    for  (let i=0; i<arr.length; i++) {
        result.push(n)
        n++
    }
    return result
}

console.log(counter(10, ["call", "call", "call"]))
console.log(counter(-2, ["call", "call", "call", "call", "call"]))