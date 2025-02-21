// let semaforo = "";

// switch(semaforo){
//     case "verde":
//         console.log("Siga em frente");
//     break;
//     case "amarelo":
//         console.log("Reduza a velocidade");
//     break;
//     case "vermelho":
//         console.log("Pare");
//     break;
//     default:
//         console.log("Semaforo com defeito");    
// }

let body = document.querySelector("body");
body.innerHTML += '<h1>Bem vindo a digital college</h1>';
body.innerHTML += '<br>';
body.innerHTML += '<h2>Olá, qual o seu nome?</h2>';
body.innerHTML += '<input id="nome" placeholder="Digite seu nome">';
body.innerHTML += '<button onclick="confirmarNome()">enter</button>';
function confirmarNome() {
    body.innerHTML += `<h2>${nome.value} em que podemos lhe ajudar?</h2>`;
    // setTimeout(() => {
    body.innerHTML += '<h2>1: Matricula</h2>';
    body.innerHTML += '<h2>2: Reposição de aula</h2>';
    body.innerHTML += '<h2>3: Pendências financeiras</h2>';
    body.innerHTML += '<input id="opcao" placeholder="Escolha uma opção">';
    body.innerHTML += '<button onclick="confirmarOpcao()">enter</button>';
    // }, 2000);
}

function confirmarOpcao() {
    switch (opcao.value) {
        case "1":
            body.innerHTML += '<h2>Qual o curso do seu interesse?</h2>';
            body.innerHTML += '<h2>1: FullStack</h2>';
            body.innerHTML += '<h2>2: Marketing</h2>';
            body.innerHTML += '<h2>3: Data Analitycs</h2>';
            body.innerHTML += '<input id="curso" placeholder="Escolha um curso">';
            body.innerHTML += '<button onclick="confirmarCurso()">enter</button>';
            break;
        case "2":
            body.innerHTML += '<h2>Qual sua turma e unidade?</h2>';
            body.innerHTML += '<input id="turma" placeholder="Digite sua turma">';
            body.innerHTML += `
                <select id="unidade">
                    <option>Aldeota</option>
                    <option>Sul</option>
                    <option>Norte</option>
                </select>
            `;
            body.innerHTML += '<button onclick="confirmarReposicao()">enter</button>';
            break;
        case "3":
            body.innerHTML += '<h2>Entre em contato com nosso financeiro: (85) 94002-9822</h2>'
            break;
        default:
            document.querySelector("#opcao").outerHTML = "";
            body.innerHTML += '<h2>Escolha uma opção válida:</h2>';
            body.innerHTML += '<h2>1: Matricula</h2>';
            body.innerHTML += '<h2>2: Reposição de aula</h2>';
            body.innerHTML += '<h2>3: Pendências financeiras</h2>';
            body.innerHTML += '<input id="opcao" placeholder="Escolha uma opção">';
            body.innerHTML += '<button onclick="confirmarOpcao()">enter</button>';
    }
}

function confirmarCurso(){

}

function confirmarReposicao(){

}