/* Referência ao endpoint de candidatos */
let urlCandidatos = "http://localhost:3000/candidatos";

/* Referência para o formulário */
const formCadastro = $("#form-cadastro");

const pMensagem = $("#mensagem");

/* Manipulador de evento para o formulário */
formCadastro.on("submit", function( event ){
    event.preventDefault();
    
    /* Capturando os dados preenchidos no formulário */
    let dados = {
        nome : $("#nome").val(),
        data : $("#data").val(),
        telefone : $("#telefone").val(),
        email : $("#email").val(),
        // vaga : $("#vagas").val() // pega o value
        vaga : $("#vagas").find(":selected").text()
    };

    /* Ajax via jQuery */
    $.ajax({
        url: urlCandidatos,
        method: "POST", /* envio/escrita de dados */
        data: dados,
        success: function(){
            pMensagem.text("Dados enviados com sucesso!");
            pMensagem.css("color", "blue");
            formCadastro[0].reset();
        },
        error: function(){
            pMensagem.text("Ops! Deu ruim!");
            pMensagem.css("color", "red");
        }
    });
});



