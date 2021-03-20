/* Referência ao webservice/api (endpoint) */
let urlVagas = "http://localhost:3000/vagas";

/* Definindo um array vazio para vagas */
let vagas = [];

/* Selecionando o select de vagas (DOM) */
const selectVagas = document.querySelector("#vagas");

/* Acessando a API para consumir os dados das vagas */
fetch(urlVagas)
    .then(resposta => resposta.json())
    .then(dados => {
        /* Adicionando os dados ao array de vagas */
        vagas = dados;

        /* Criando um option vazio para o select */
        selectVagas.innerHTML = "<option></option>";

        /* Loop for/of */
        for( let vaga of vagas ){
            let opcao = document.createElement("option");
            opcao.textContent = vaga.titulo;
            opcao.setAttribute("value", vaga.id);
            selectVagas.appendChild(opcao);
        }
    });

