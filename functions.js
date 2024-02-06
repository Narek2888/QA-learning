let y = 10

let div = function(t, s){
    return t / s
}

let dip = function(y, zoo){
    return zoo(y) * zoo(y)
}

let yup = function(c){
    return div(y, 2)
}

let d = dip(4, yup)

console.log(d)