// exemplo fazendo a tabuada do 2 for(inicio, condição, incremento)
for(let i = 1; i <= 10; i++) {
    console.log(`2 x ${i} = ${2*i}`)
}

// parando um laço
for(let i = 100; i > 0; i--) {
    if(i === 49) {
        break
    }
    console.log(i)
}

// pulando a execução de um loop
for(let i = 10; i > 0; i--) {
    if(i === 5) {
        continue; // vai pular o 5
    }
    console.log(i)
}