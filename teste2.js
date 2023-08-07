const prompt=require("prompt-sync")();
const terrestre=prompt("É terrestre?");
const pessoas = prompt("Cabe apenas uma pessoa?");
const pesado = prompt("É pesado?");
const pedal = prompt("Tem pedal?");
const capacete = prompt("Usa capacete?");
const respostas = [terrestre,pessoas,pesado,pedal,capacete]
const mensagem =""
switch (respostas) {
    case ["s","s","s","n","n"]:
        mensagem="Trator";
        break;

    default:
        console.log("n deu...")
        break;
}
console.log("a mensagem é: ",mensagem)
console.log(respostas);