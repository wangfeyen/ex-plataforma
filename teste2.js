const prompt=require("prompt-sync")();
const terrestre=prompt("É terrestre?");
const pessoas = prompt("Cabe apenas uma pessoa?");
const pesado = prompt("É pesado?");
const pedal = prompt("Tem pedal?");
const capacete = prompt("Usa capacete?");
const respostas = terrestre+pessoas+pesado+pedal+capacete

let mensagem =""
let falha=false;
switch (respostas) {
    case ("sssnn"):
        mensagem="Trator";
        break;
    
    case("ssnss"):
        mensagem="Bicicleta";
        break;
    case("snsns"):
        mensagem="Moto";
        break;

    default:
        console.log("Transporte indefinido!")
        falha=true;
        break;
}
if (falha===false){
    console.log("O transporte é",mensagem,"!")
}