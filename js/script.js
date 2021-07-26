var bt_enviar = document.getElementById("enviar");
    if(bt_enviar){
        bt_enviar.addEventListener("click", function(){
            let nome = document.getElementById("nome").value;
            let cpf = document.getElementById("cpf").value;
            let datNasc = document.getElementById("datanasc").value;
            let ddd = document.getElementById("ddd").value;
            let telefone = document.getElementById("telefone").value;
            let email = document.getElementById("email").value;
            let cep = document.getElementById("cep").value;
            let endereco = document.getElementById("endereco").value;
            let numero = document.getElementById("numero").value;
            let complemento = document.getElementById("complemento").value;
            let bairro = document.getElementById("bairro").value;
            let cidade = document.getElementById("cidade").value;
            let estado = document.getElementById("estado").value;
            let referencia = document.getElementById("referencia").value;

            let dataCliente = {
                nome,
                cpf,
                datNasc,
                ddd,
                telefone,
                email,
                cep,
                endereco,
                numero,
                complemento,
                bairro,
                cidade,
                estado,
                referencia,
            }

            let converData = JSON.stringify(dataCliente);
            localStorage.setItem("cadastroCliente", converData);
            alert("Cadastro concluído");
        
    });

}
var bt_cadastrar = document.getElementById("cadastrar");
    if(bt_cadastrar){
        bt_cadastrar.addEventListener("click", function(){
            let descricao = document.getElementById("descricao").value;
            let marca = document.getElementById("marca").value;
            let fornecedor = document.getElementById("fornecedor").value;
            let preco_custo = document.getElementById("preco_custo").value;
            let preco_venda = document.getElementById("preco_venda").value;

            let DataProd = {
                descricao,
                marca,
                fornecedor,
                preco_custo,
                preco_venda,
            }

            let converDataProd= JSON.stringify(DataProd);
            localStorage.setItem("cadastroProduto", converDataProd);
            alert("Cadastro concluído");
    });
}