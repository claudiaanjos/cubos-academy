// const lodash = require("lodash");

const lista =[1, 2, 3, 4, 5, "aaaa"];

// console.log(lodash.reverse(lista));

/* Como o lodash é um objeto podemos usar a desestruturação */

const { reverse } = require("lodash");

console.log(reverse(lista));