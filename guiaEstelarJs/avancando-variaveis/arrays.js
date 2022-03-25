let animals = [
    'Lion',
    'Monkey',
    { // é possível colocar um objeto, mas como iniciamos com strings, essa não é uma boa prática!
        name: 'Cat',
        age: 3
    }
]

console.log(animals)
// acessar elementos do array
console.log(animals[0])
console.log(animals[1])
console.log(animals[2])

// como acessar a idade do gato?
console.log(animals[2].age)

// adicionar um elemento no array
animals.push('Tiger')
console.log(animals[3])

// número de elementos do array
console.log(animals.length)