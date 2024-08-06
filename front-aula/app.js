const btnCriar = document.querySelector("#btnCriar")
const listaFilmes = document.querySelector("#listaFilmes")
const inputUsuario = document.querySelector("#inputUsuario")
const inputAno = document.querySelector("#inputAno")
const inputDiretor = document.querySelector("#inputDiretor")

const filmes = [
    {
        nome: "Vingadores Ulimato",
        ano: 2019,
        diretor: " Anthony Russo"
    },
];

renderizarNaTela();

btnCriar.addEventListener('click', function(event){
    event.preventDefault()
    criarFilme()
})

function criarFilme(){
    const novoFilme = {
        nome: inputUsuario.value,
        ano: inputAno.value,
        diretor: inputDiretor.value
    };

    filmes.unshift(novoFilme)

    renderizarNaTela()
}

function renderizarNaTela(){
    listaFilmes.innerHTML = '';
    filmes.forEach((filme, index) => {
        const novoFilme = document.createElement('li');
        novoFilme.innerHTML = `
            <h1>${filme.nome}</h1>
            <p>${filme.ano}</p>
            <h3>${filme.diretor}</h3>
            <button onclick="editarFilme(${index})">Editar</button>
            <button onclick="apagarFilme(${index})">Apagar</button>
        `;
        listaFilmes.appendChild(novoFilme);
    });
}

function editarFilme(idFilme){
    const novoNome = prompt('Digite o Novo nome:', filmes[idFilme].nome);
    if (novoNome !== null) {
        filmes[idFilme].nome = novoNome;
        renderizarNaTela(); // Re-renderizar após edição
    }
}

function apagarFilme(idFilme){
    filmes.splice(idFilme, 1)

    renderizarNaTela()
}