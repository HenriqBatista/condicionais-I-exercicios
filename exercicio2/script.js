

let idade = Number(prompt("Insira a sua idade"))
let ensinoMed = confirm("Você ja terminou o seu ensino medio")
let cursando = confirm("Você está fazendo algum curso no momento?")


 function verificador(idade,ensinoMed,cursando){
if (idade >= 18){
    console.log("Okay, você é maior de idade e pode prosseguir")
}else("Ops, você não é maior de idade e por isso terei de te barrar por aqui")

if (ensinoMed === true){
    console.log("Bacana, fico feliz que tenha completado essa parte da sua formação")
}else if(ensinoMed === false){
    console.log("Poxa que pena, mas espero que você complete logo logo")
}

if(cursando === true){
    console.log("Interessante ein! Buscar mais conhecimento nos dá mais oportunidades de crescimento profissional")
}else if(cursando===false){
    console.log("Tudo bem, obrigado pela resposta")
}
  
 }

verificador(idade,ensinoMed,cursando)