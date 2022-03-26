// function expression
// function anonymous

// parameters
const sum = function(number1, number2) {
    let total = number1 + number2
    return total
}

sum(2, 3) // arguments - argumentos

let numero1, numero2
numero1 = 34
numero2 = 25

console.log(`A soma de ${numero1} com ${numero2} é ${sum(numero1, numero2)}`)


// Função é um liquidificador 

function fazerSuco(fruta1, fruta2) {
    return fruta1 + fruta2
}

const copo = fazerSuco('banana', 'maça')
console.log(copo)
