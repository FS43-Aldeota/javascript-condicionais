// questões de if else
// questão 1
// let idade = 19;
// if(idade >= 18){
//     console.log("Maior de idade");
// } else {
//     console.log("Menor de idade");
// }

// questão 2
// let numero = 0;
// if(numero > 0){
//     console.log("Numero positivo");
// } else if(numero == 0){
//     console.log("Numero é zero");
// } else {
//     console.log("Numero negativo");
// }

// questão 3
// let numeroA = 5;
// let numeroB = 5;
// if(numeroA > numeroB){
//     console.log(`${numeroA} é maior que ${numeroB}`);
// } else if(numeroA < numeroB){
//     console.log(`${numeroB} é maior que ${numeroA}`);
// } else {
//     console.log("Os numeros são iguais");
// }

// questão 4
// let numero = 3;
// if(numero % 2 == 0){
//     console.log(`${numero} é par`);
// }else{
//     console.log(`${numero} é impar`);
// }

// questão 5
// let num1 = 7
// let num2 = 4
// let num3 = 3
// let media = (num1+num2+num3)/3

// if(media>=7){
//     console.log(`aprovado: a media foi ${media.toFixed(1)}`);
// }else if(media>5 && media<7){
//     console.log(`recuperação: a media foi ${media.toFixed(1)}`);
// }else{
//     console.log(`reprovado a media foi ${media.toFixed(1)}`);
// }

// questão 6
// let valorDaCompra = 85;
// let desconto = valorDaCompra * 0.10;
// let compraComDesconto = valorDaCompra - desconto;
// if(valorDaCompra > 100){
//     console.log(`Sua compra de ${valorDaCompra} recebeu um desconto de 10%: R$ ${compraComDesconto.toFixed(2)}`);
// }else{
//     console.log(`Valor total a pagar: R$ ${valorDaCompra.toFixed(2)}`);
// }

// questão 7
// let ano = 2018;
// if (ano % 400 == 0) {
//     console.log(`${ano} é bisexto`);
// } else if(ano % 4 == 0 && ano % 100 != 0){
//     console.log(`${ano} é bisexto`);
// }else{
//     console.log(`${ano} não é bisexto`);
// }

// questão 8
// let usuario = "administrador"
// let senha = 1234
// if(senha == 1234 && usuario == "admin"){
//     console.log("acesso permitido")
// }
// else {
//     console.log("acesso negado")
// }

// questão 9
// let valorDaCompra = 199;
// let frete = 20;
// if(valorDaCompra >= 200){
//     console.log(`Sua compra foi de R$ ${valorDaCompra.toFixed(2)} e o frete fica por nossa conta!`);
// }else{
//     console.log(`O total da sua compra + frete é: R$ ${(valorDaCompra + frete).toFixed(2)}`);
// }

// questão 10
// let numero = 48;
// if(numero >= 10 && numero <= 50){
//     console.log(`${numero} está no intervalo entre 10 e 50`);
// } else {
//     console.log(`${numero} não está no intervalo entre 10 e 50`);
// }
// console.log(`${numero} ${(numero >= 10 && numero <= 50) ? "" : "não"} está no intervalo entre 10 e 50`);




// questões de switch case
// questão 1
// let diaDaSemana = 6;
// switch (diaDaSemana) {
//     case 1:
//         console.log("Domingo");
//         break;
//     case 2:
//         console.log("Segunda");
//         break;
//     case 3:
//         console.log("Terça");
//         break;
//     case 4:
//         console.log("Quarta");
//         break;
//     case 5:
//         console.log("Quinta");
//         break;
//     case 6:
//         console.log("Sexta");
//         break;
//     case 7:
//         console.log("Sábado");
//         break;

//     default:
//         console.log("Informe um numero entre 1 e 7");
//         break;
// }

// questão 2
// let rank = "E";
// switch (rank) {
//     case "A":
//         console.log("Ótimo");
//         break;
//     case "B":
//         console.log("Bom");
//         break;
//     case "C":
//         console.log("Regular");
//         break;
//     case "D":
//         console.log("Ruim");
//         break;
//     case "F":
//         console.log("Reprovado");
//         break;
//     default:
//         console.log("Ranking inexistente para este valor");
//         break;
// }

// questão 3
// let numeroA = 5;
// let numeroB = 0;
// let operacao = "/";

// switch (operacao) {
//     case "+":
//         console.log(`O resultado de ${numeroA} ${operacao} ${numeroB} é: ${numeroA + numeroB}`);
//         break;
//     case "/":
//         if (numeroB == 0) {
//             console.log("Não é possível dividir por 0");
//         } else {
//             console.log(`O resultado de ${numeroA} ${operacao} ${numeroB} é: ${(numeroA / numeroB).toFixed(1)}`);
//         }
//         break;
//     case "*":
//         console.log(`O resultado de ${numeroA} ${operacao} ${numeroB} é: ${numeroA * numeroB}`);
//         break;
//     case "-":
//         console.log(`O resultado de ${numeroA} ${operacao} ${numeroB} é: ${numeroA - numeroB}`);
//         break;
//     case "%":
//         console.log(`O resultado de ${numeroA} ${operacao} ${numeroB} é: ${((numeroA * numeroB) / 100).toFixed(1)}`);
//         break;

//     default:
//         console.log("Informe um operador válido: +, -, *, /");
//         break;
// }

// questão 6
// let numeroDoPrato = 7;
// switch (numeroDoPrato) {
//     case 1:
//         console.log("Você pediu lasanha");
//         break;
//     case 2:
//         console.log("Você pediu Camarão");
//         break;
//     case 3:
//         console.log("Você pediu Tiramisu");
//         break;
//     case 4:
//         console.log("Você pediu Feijoada");
//         break;
//     case 5:
//         console.log("Você pediu whisky");
//         break;
//     default:
//         console.log("Informe uma opção entre: 1 e 5");
//         break;
// }

// questão 7
let temperatura = 98;
let de = "fahrenheit";
let para = "kelvin";
switch (de) {
    case "celsius":
        switch (para) {
            case "fahrenheit":
                console.log(`${temperatura} ${de} equivale a ${(temperatura*1.8+32).toFixed(1)} ${para}`);
                break;
            case "kelvin":
                console.log(`${temperatura} ${de} equivale a ${temperatura+273} ${para}`);
                break;
            default:
                console.log("Opções válidas: fahrenheit, kelvin");
                break;
        }
        break;
    case "fahrenheit":
        switch (para) {
            case "celsius":
                console.log(`${temperatura} ${de} equivale a ${((temperatura - 32)/1.8).toFixed(1)} ${para}`);
                break;
            case "kelvin":
                console.log(`${temperatura} ${de} equivale a ${(((temperatura - 32)/1.8)+273).toFixed(1)} ${para}`);
                break;
            default:
                console.log("Opções válidas: fahrenheit, kelvin");
                break;
        }
        break;
    default:
        break;
}