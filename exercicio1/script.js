
// let numero = Number(prompt("Insira um número"))

// function par(numero){
//     if(par %2 === 0){
//        console.log("Esse número é par");
//     }else if(par %2 === 1){
//         console.log("Esse número é impar")
//     }
// }

num = Number(prompt("Insira um número"))

function par(num){
    if(num %2 == 0) {
        return `O numero ${num} par`
    }else 
       return `O numero ${num} impar`
    }
   console.log(par(num))

// console.log(par(2))
// Crie uma função que receba uma const numérica qualquer. Crie um `if` para verificar se o número guardado na const é **par**. Caso seja, a função deve retornar a mensagem: "o número é par". Após imprima o retorno no console.
