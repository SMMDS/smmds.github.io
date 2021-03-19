// Referencia à API, endpoint de candidatos


let urlCandidatos = "http://localhost:3000/candidatos"

// constantes para os elementos
const botaoListar = $("#listar")
const listaCandidatos =$("#lista-candidatos")

// Manipulando o evento de click no botão

botaoListar.on("click",function(){

    $.ajax({
        url:urlCandidatos,
        dataType:"json" ,
        method:"GET",
        success: function(resposta){
            listaCandidatos.html("")
            // console.table(resposta);
            /*  */
            $.each(resposta,function(indice,item){
                console.log(indice,item);

                listaCandidatos.append(
                    `<li class="list-group-item">
                    ${item.nome}
                    </li>`
                );

            })

        },
        error:function(){
            console.log("Deu Ruim");
        }
    })
})