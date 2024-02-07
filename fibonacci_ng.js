// Write a generator function that returns a generator object which yields the fibonacci sequence.

// The fibonacci sequence is defined by the relation Xn = Xn-1 + Xn-2.

// The first few numbers of the series are 0, 1, 1, 2, 3, 5, 8, 13

function fibonacci(num) {
    let output = []

    if (num === 1) {
        output.push(0);
    } else if (num === 2){
        output.push(0, 1);
    } else if (num <= 0){
        output
    } else {
        output = [0, 1]
        for (let i=1; i<=num-2; i++) {
            output.push(output[i]+output[i-1])
        }
    }
    return output
}

console.log(fibonacci(6)) // [0, 1, 1, 2, 3, 5]
console.log(fibonacci(-1)) // []