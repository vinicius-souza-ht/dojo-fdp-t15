ClienteController = function () {

    this.clienteService = new ClienteService();

    this.modoEdicao = false;

    //Renderização
    this.renderizarTabelaClientes = function (arrClientes) {

        dados = "";
        for (i = 0; i < arrClientes.length; i++) {
            dados += "<tr>";
            dados += "<td>" + arrClientes[i].nome + "</td>";
            dados += "<td>" + arrClientes[i].endereco + "</td>";
            dados += "<td>" + arrClientes[i].cpf + "</td>";
            dados += "<td>" + arrClientes[i].rg + "</td>";
            dados += "<td> <input type='button' value='Excluir' onclick='cc.aoClicarExcluir(" + i + ")'></td>";
            dados += "<td> <input type='button' value='Editar' onclick='cc.aoClicarEditar(" + i + ")'></td>";

            dados += "</tr>";
        }

        document.getElementById("tbClientes").innerHTML = dados;
    }

    //Eventos dos Botoes
    this.aoClicarSalvar = function () {

        //Leitura dos dados
        nomeCliente = document.getElementById("txtNome").value;
        enderecoCliente = document.getElementById("txtEndereco").value;
        cpfCliente = document.getElementById("txtCpf").value;
        rgCliente = document.getElementById("txtRg").value;
        //Constroi um objeto
        cli = { nome: nomeCliente, endereco: enderecoCliente, cpf:cpfCliente, rg:rgCliente };

        if (this.modoEdicao == false) {
            //Adiciona no vetor
            this.clienteService.adicionar(cli);
        } else {
            this.clienteService.alterar(this.indiceEdicao, cli);
        }


        this.limparCampos();
        this.sairModoEdicao();


    }

    this.aoClicarListar = function () {
        clientes = this.clienteService.buscarTodos();
        this.renderizarTabelaClientes(clientes);

    }

    this.aoClicarExcluir = function (indice) {
        this.clienteService.excluir(indice);

    }

    this.aoClicarEditar = function (indice) {
        this.entrarModoEdicao();
        this.indiceEdicao = indice;

        cliente = this.clienteService.buscarPorIndice(indice);
        document.getElementById("txtNome").value = cliente.nome;
        document.getElementById("txtEndereco").value = cliente.endereco;
        document.getElementById("txtCpf").value = cliente.cpf;
        document.getElementById("txtRg").value = cliente.rg;
    }

    this.aoClicarCancelar = function () {
        this.limparCampos();
        this.sairModoEdicao();
    }


    this.limparCampos = function () {

        //Limpa dados da tela
        document.getElementById("txtNome").value = "";
        document.getElementById("txtEndereco").value = "";
        document.getElementById("txtCpf").value = "";
        document.getElementById("txtRg").value = "";

    }


    this.entrarModoEdicao = function () {
        this.modoEdicao = true;
    }

    this.sairModoEdicao = function () {
        this.modoEdicao = false;
    }

}