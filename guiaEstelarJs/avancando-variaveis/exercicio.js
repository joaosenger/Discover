// 1. Declare uma variável de nome weight

let weight

// 2. Que tipo de dados é a variável acima? R: undefined
console.log(typeof weight)
weight = 79.1
// 

/* 3. Declare uma variável e atribua valores para cada um dos dados:
    * name: String
    * age: Number (intenger)
    * stars: Number (float)
    * isSubscribed: Boolean
*/
let name = "João"
let age = 27
let stars = 23.3232
let isSubscribed = true

/* 4. A variável student abaixo é de qual tipo? R: Object */
// let student = {}


// 4.1 Atribua a ela as mesmas propriedades e valores do exercício 3.

let student = {
    name: "João",
    age: 27,
    stars: 23.3232,
    isSubscribed: true
}

// 4.2 Mostre no console a seguinte mensagem: <name> tem <age> de idade e pesa <weight> kg.

console.log(`${student.name} tem ${student.age} anos de idade e pesa ${weight} kg.`)

// 5. Declare uma variável do tipo Array, de nome students e atribua a ela nenhum valor, ou seja, somente o array vazio.
let students = []

/* 6. Reatribua o valor para a variável acima, 
colocando denro dela o objeto student da questão 4. 
Não copiar e colar o objeto, mas usa o objeto criado e inserir ele no Array */

students = [
    student
]
console.log(students)

// 7. Coloque no console o valor da posição zero do Array acima
console.log(students[0])

// 8. Crie um novo student e coloque na posição 1 do Array students
students[1] = {
    name: "Antonio",
    age: 18,
    stars: 32.4,
    isSubscribed: false
}
console.log(students[1])

/*  9. Sem rodar o código responda qual é a resposta do 
código abaixo e por que? Após a sua resposta, rode o código e veja se você acertou.
console.log(a)
var a = 1
*/

// R: undefined, pelo hoisting do js na variável a

console.log(a)
var a = 1
