const perguntas = [
    {
        pergunta: "O que é JavaScript?",
        respostas: [
            "Um banco de dados",
            "Uma linguagem de programação",
            "Um sistema operacional"
        ],
        correta: 1 // "Uma linguagem de programação" é a resposta correta
    },
    {
        pergunta: "Qual é a sintaxe correta para declarar uma variável em JavaScript?",
        respostas: [
            "variavel = valor",
            "variable nome = valor",
            "var nome = valor"
        ],
        correta: 2 // "var nome = valor" é a resposta correta
    },
    {
        pergunta: "Qual é a função do método 'getElementById()'?",
        respostas: [
            "Alterar o estilo de um elemento HTML",
            "Selecionar um elemento HTML por sua classe",
            "Selecionar um elemento HTML por seu ID"
        ],
        correta: 2 // "Selecionar um elemento HTML por seu ID" é a resposta correta
    },
    {
        pergunta: "O que significa 'DOM' em JavaScript?",
        respostas: [
            "Data Object Model",
            "Document Object Model",
            "Dynamic Object Method"
        ],
        correta: 1 // "Document Object Model" é a resposta correta
    },
    {
        pergunta: "Qual é a função do operador '===' em JavaScript?",
        respostas: [
            "Comparação estrita",
            "Atribuição",
            "Comparação não estrita"
        ],
        correta: 0 // "Comparação estrita" é a resposta correta
    },
    {
        pergunta: "Qual método é usado para adicionar um elemento ao final de um array em JavaScript?",
        respostas: [
            "append()",
            "push()",
            "concat()"
        ],
        correta: 1 // "push()" é a resposta correta
    },
    {
        pergunta: "O que o método 'forEach()' faz em JavaScript?",
        respostas: [
            "Itera sobre os elementos de um array",
            "Remove elementos de um array",
            "Transforma todos os elementos de um array em um único elemento"
        ],
        correta: 0 // "Itera sobre os elementos de um array" é a resposta correta
    },
    {
        pergunta: "Qual é a função do método 'toFixed()' em JavaScript?",
        respostas: [
            "Arredonda um número para o inteiro mais próximo",
            "Formata um número com um número específico de casas decimais",
            "Retorna o menor número inteiro maior ou igual a um número"
        ],
        correta: 1 // "Formata um número com um número específico de casas decimais" é a resposta correta
    },
    {
        pergunta: "Qual é a forma correta de escrever um comentário de uma linha em JavaScript?",
        respostas: [
            "// Comentário de uma linha",
            "<!-- Comentário de uma linha -->",
            "/* Comentário de uma linha */"
        ],
        correta: 0 // "// Comentário de uma linha" é a resposta correta
    },
    {
        pergunta: "Qual é o resultado de 'typeof null' em JavaScript?",
        respostas: [
            "Null",
            "Undefined",
            "Object"
        ],
        correta: 2 // "Object" é a resposta correta
    }
];


// para puxar o "quiz do html". queryselector vai ser pra procurar o id, representado por #
const quiz = document.querySelector('#quiz')
// para puxar o template. queryselector é para procurar pelo seletor Ex. div, dt e etc
const template = document.querySelector('template')
//new = criar coisas novas .... set é para tirar ou colocar e não pode repetir. 
//Para fazer a soma dos
const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
//para exibir o texto exemplo 10 de 10
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

// Estrutura de Loop ou Repetição ou Laço de Repetição das Perguntas
for(const item of perguntas) {
//clonar todos os nós/tags dentro do template. True para clonar tudo    
    const quizItem = template.content.cloneNode(true)
    // para que todas as perguntas apareçam 
    quizItem.querySelector('h3').textContent = item.pergunta

// Estrutura de Loop ou Repetição ou Laço de Repetição das respostas
    for(let resposta of item.respostas) {
        //clonar todos os nós;/tags dentro do template. True para clonar tudo    
            // para que todas as perguntas apareçam, o dt é a tag onde esta as resposta e a bolinha de marcar
        // dentro do dl procura o dt 
            const dt = quizItem.querySelector('dl dt').cloneNode(true)
            // dentro do dt tem o span, dentro do span tem um texto que é a resposta
            dt.querySelector('span').textContent = resposta
            // atribuir nome as respostas, nome e valor especifico. Dando um indice as perguntas para saber qual é se é a primeira segunda ... e etc
            dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
            // pra dar valor as respostas 0, 1 e 2
            dt.querySelector('input').value = item.respostas.indexOf(resposta)
            //evento de mudança do input => arrow function 
            //onchange = mudança ligada
            dt.querySelector('input').onchange = (event) => {
                //evento para acontecer algo quando clica na respostas. Atribuindo uma comparação (no alerte de teste sai true/fase)
                const estaCorreta = event.target.value == item.correta //não pode usar === porque o numero correto 0/1/2 não bate com a string
                
                
                //para quando errar depois de acertar, não continuar somando
                corretas.delete(item)
                // se esta correto entra na nova função
                if(estaCorreta) {
                //    alert('acertou') }
                //else {
                //    alert('errou') 
                    corretas.add(item)
                }
            //repetir aqui para repetir e fazer as contas
                mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
            }

            
            
            //quizitem procura o dl e dicionar um filho que é o dt
            quizItem.querySelector('dl').appendChild(dt)
    }   
    
    //apagar o resposta A que estava aparecendo
    quizItem.querySelector('dl dt').remove()
 
    // coloca a pergunta na tela adicionar um filho no quiz
    quiz.appendChild(quizItem)
}



// alert(perguntas[0].pergunta) => alerta para "Pergunta 01". 0 é o array [] de Perguntas

// alert(perguntas[0].respostas[2]) => Para aparecer a "Resposta C", por exemplo

//alert(perguntas[0].respostas[perguntas[0].correta]). Apresentar a resposta correta 2 ou C

