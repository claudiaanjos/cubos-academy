let m = 90000
let c = 60000
let n = 24

let i = ((Math.pow((m/c),(1/n)) - 1) * 100).toFixed(2)

console.log(i)
