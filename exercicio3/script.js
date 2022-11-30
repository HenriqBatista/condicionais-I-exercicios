
// Crie uma função que receba do usuário sua nacionalidade, utilize um **prompt** que diga: "Escreva aqui sua nacionalidade" e guarde o valor da resposta em uma const `nacionalidade`.

// Vamos considerar que nosso programa aceita as seguintes 5 nacionalidades:
// - brasileira;
// - argentina;
// - uruguaia;
// - chilena;
// - colombiana;

// Crie uma estrutura de `if/else if/else` que verifique se a nacionalidade guardada na const `nacionalidade` é igual a cada uma das nacionalidades acima, e caso seja, imprima a nacionalidade no console. O último `else` deve imprimir "nacionalidade não encontrada" caso o valor de `nacionalidade` não corresponda a nenhum dos valores.

// > 💡 Lembre-se de prestar atenção às letras maiúsculas e minúsculas. 

// const nacionalidade = ["brasileira","argentina","uruguaia","chilena","colombiana"]
// const nacionalidadeUsuario = prompt("Me diga qual a sua nacionalidade")

// const pais = nacionalidadeUsuario =>{
   
//     if(pais == nacionalidade[0]){
//     // alert("Pelo oque você me disse, voce é Brasileiro")
//     return nacionalidade[0]
// }else if(pais == nacionalidade[1]){
//     // alert("Olha só, temos um Hermano aqui! Pelé é maior que Maradona")
//     return nacionalidade[1]
// }else if(pais == nacionalidade[2]){
//     // alert("Hmm, temos um uruguaio por aqui, País de otimos vinhos")
//     return nacionalidade[2]
// }else if(pais == nacionalidade[3]){
//     // alert("Chi, Chi, Chi, Le, Le, Le, Viva Chile!!")
//     return nacionalidade[3]
// }else if(pais == nacionalidade[4]){
//     // alert("Uau, um colombiano! Vindo das belas terras entre os Andes e a nossa belissima Floresta Amazônica")
//     return nacionalidade[4]
// }else{
//     return "nacionalidade nao encontrada"
// }
// }

// console.log(pais(nacionalidadeUsuario))
let nacionalidade = prompt("Qual a sua nacionalidade?").toLowerCase()

function pais(nacionalidade){
const origem = ["brasileira", "argentina", "uruguaia", "chilena", "colombiana"]
    if(nacionalidade === origem[0]){
        console.log("Pelo oque você me disse, voce é Brasileiro")
    }else if (nacionalidade === origem[1]){
        console.log("Olha só, temos um Hermano aqui! Pelé é maior que Maradona")
    }else if(nacionalidade === origem[2]){
        console.log("Hmm, temos um uruguaio por aqui, País de otimos vinhos")
    }else if(nacionalidade === origem[3]){
        console.log("Chi, Chi, Chi, Le, Le, Le, Viva Chile!!")
    }else if(nacionalidade === origem[4]){
        console.log("Uau, um colombiano! Vindo das belas terras entre os Andes e a nossa belissima Floresta Amazônica")
    }else {
        console.log("Nacionalidade não encontrada")
    }
}
pais(nacionalidade)