/*
Variáveis e tipos de dados 
*/

var name // declaração or declaration

// assignment or atribuição de valores
name = "João"
console.log(typeof name)

let age = 20 // number
let isHuman = true // boolean

// agrupamento de declarações
let book, table
book = "Pai rico Pai pobre"
table = "Is on the"

console.log(name + age, isHuman + book, table) // podemos concatenar com , ou +

// multiplos argumentos na função

// texto + variáveis
console.log("O", name, "tem", age, "anos.")

// interpolando valores com template literals or template strings
console.log(`O ${name} tem ${age} anos.`) // gosto mais dessa!
