class Cliente {
    #cpf
    constructor(nome, cpf, endereco){
        this.nome=nome
        this.endereco=endereco
        this.telefones=new Set()
        this.#cpf=cpf
    }

    adicionarTelefone(telefone){
        this.telefones.add(telefone)
    }

}

class Telefone {
    constructor(ddd, numero){
        this.ddd=ddd
        this.numero=numero
    }
}

class Empresa {
    #cnpj
    constructor(razaoSocial, nomeFantasia, cnpj, endereco){
        this.razaoSocial=razaoSocial
        this.nomeFantasia=nomeFantasia
        this.#cnpj=cnpj
        this.endereco=endereco
        this.clientes=new Set()
        this.telefones=new Set()
    }
}