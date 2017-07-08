ClienteService = function () {
    this.clientes = [];

    //C REATE
    this.adicionar = function (cli) {
        this.clientes.push(cli);
    }
    //R ETRIEVE
    this.buscarTodos = function () {
        return this.clientes;
    }
    //U PDATE
    this.alterar = function (indice, cli) {
        // alteracao no vetor
        this.clientes.splice(indice, 1, cli);

    }
    //D ELETE
    this.excluir = function (indice) {
        //remover no vetor
        this.clientes.splice(indice, 1);
    }

    this.buscarPorIndice = function (indice) {
        return this.clientes[indice];
    }
}