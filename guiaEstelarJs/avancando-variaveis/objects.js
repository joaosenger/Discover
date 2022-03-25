const person = {
    name: 'João',
    age: 30,
    weight: 79.1,
    isProgrammer: true
}

console.log(person)

//acessando propriedades do objeto
console.log(person.name)
console.log(person.isProgrammer)

//também podemos usar com template literals
console.log(`${person.name} tem ${person.weight} quilos e a sua profissão é programador? ${person.isProgrammer}`)