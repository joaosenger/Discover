/*

    Block statement

    {

        // aqui é um bloco, posso colocar qualquer código

    }

*/

{
    console.log("Esse é um bloco de código")
}

// o var é global e poderá funconar fora do escopo de um bloco!
// esse conceito é chamado de hoisting, o JS por baixo dos panos joga as variáveis para cima do arquivo, declarando as variáveis, como no C.
{ 
    var x = 0
}

console.log(x) // imprime o valor, mesmo X estando fora do escopo!


// const e let são locais e só funcionam no escopo onde a variável foi criada
{ 
    let y = 1
}
// erro, pois o console.log está fora do escopo da variável let, que está em um bloco distinto.
// console.log(y) 


// se let for declarada anterior ao bloco, o valor dela pode ser acessado e modificado por um bloco!
let z = 32;
console.log("O valor de Z antes e fora do bloco é: ", z)
    {
        z = 511;
        console.log("O valor de Z dentro do bloco é: ", z)
    }
console.log("O valor de Z depois e fora do bloco é: ", z)

