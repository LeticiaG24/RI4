export class Telefone {
  constructor(ddd, numero) {
    this.ddd = ddd;
    this.numero = numero;
  }

  getDdd() { return this.ddd; }
  getNumero() { return this.numero; }

  getDddMaiusculo() { return String(this.ddd).toUpperCase(); }
  getDddMinusculo() { return String(this.ddd).toLowerCase(); }
  getNumeroMaiusculo() { return String(this.numero).toUpperCase(); }
  getNumeroMinusculo() { return String(this.numero).toLowerCase(); }

  toString() {
    return `(${this.ddd}) ${this.numero}`;
  }
}

export class Endereco {
  constructor(rua, numero, bairro, cidade, estado, cep) {
    this.rua = rua;
    this.numero = numero;
    this.bairro = bairro;
    this.cidade = cidade;
    this.estado = estado;
    this.cep = cep;
  }

  getRua() { return this.rua; }
  getNumero() { return this.numero; }
  getBairro() { return this.bairro; }
  getCidade() { return this.cidade; }
  getEstado() { return this.estado; }
  getCep() { return this.cep; }

  getRuaMaiusculo() { return this.rua.toUpperCase(); }
  getRuaMinusculo() { return this.rua.toLowerCase(); }
  getBairroMaiusculo() { return this.bairro.toUpperCase(); }
  getBairroMinusculo() { return this.bairro.toLowerCase(); }
  getCidadeMaiusculo() { return this.cidade.toUpperCase(); }
  getCidadeMinusculo() { return this.cidade.toLowerCase(); }
  getEstadoMaiusculo() { return this.estado.toUpperCase(); }
  getEstadoMinusculo() { return this.estado.toLowerCase(); }
  getCepMaiusculo() { return String(this.cep).toUpperCase(); }
  getCepMinusculo() { return String(this.cep).toLowerCase(); }

  toString() {
    return `${this.rua}, ${this.numero} — ${this.bairro}, ${this.cidade}/${this.estado} — CEP: ${this.cep}`;
  }
}

export class Cliente {
  #cpf;
  constructor(cpf, nome, email, endereco = null) {
    this.#cpf = cpf;
    this.nome = nome;
    this.email = email;
    this.endereco = endereco;
    this.telefones = [];
  }

  get cpf() { return this.#cpf; }

  getNome() { return this.nome; }
  getEmail() { return this.email; }
  getEndereco() { return this.endereco; }
  getTelefones() { return this.telefones; }

  getCpfMaiusculo() { return String(this.#cpf).toUpperCase(); }
  getCpfMinusculo() { return String(this.#cpf).toLowerCase(); }
  getNomeMaiusculo() { return this.nome.toUpperCase(); }
  getNomeMinusculo() { return this.nome.toLowerCase(); }
  getEmailMaiusculo() { return this.email.toUpperCase(); }
  getEmailMinusculo() { return this.email.toLowerCase(); }

  adicionarTelefone(telefone) {
    this.telefones.push(telefone);
  }

  removerTelefone(index) {
    this.telefones.splice(index, 1);
  }

  setEndereco(endereco) {
    this.endereco = endereco;
  }

  toString() {
    const fones = this.telefones.map(t => t.toString()).join(', ');
    return `Cliente: ${this.nome} | CPF: ${this.#cpf} | Email: ${this.email}\n` +
           `  Endereço: ${this.endereco ? this.endereco.toString() : 'N/A'}\n` +
           `  Telefones: ${fones || 'N/A'}`;
  }
}

export class Empresa {
  #cnpj;
  constructor(cnpj, razaoSocial, email, endereco = null) {
    this.#cnpj = cnpj;
    this.razaoSocial = razaoSocial;
    this.email = email;
    this.endereco = endereco;
    this.telefones = [];
    this.clientes = [];
  }

  get cnpj() { return this.#cnpj; }

  getRazaoSocial() { return this.razaoSocial; }
  getEmail() { return this.email; }
  getEndereco() { return this.endereco; }
  getTelefones() { return this.telefones; }
  getClientes() { return this.clientes; }

  getCnpjMaiusculo() { return String(this.#cnpj).toUpperCase(); }
  getCnpjMinusculo() { return String(this.#cnpj).toLowerCase(); }
  getRazaoSocialMaiusculo() { return this.razaoSocial.toUpperCase(); }
  getRazaoSocialMinusculo() { return this.razaoSocial.toLowerCase(); }
  getEmailMaiusculo() { return this.email.toUpperCase(); }
  getEmailMinusculo() { return this.email.toLowerCase(); }

  adicionarTelefone(telefone) {
    this.telefones.push(telefone);
  }

  removerTelefone(index) {
    this.telefones.splice(index, 1);
  }

  setEndereco(endereco) {
    this.endereco = endereco;
  }

  adicionarCliente(cliente) {
    this.clientes.push(cliente);
  }

  removerCliente(index) {
    this.clientes.splice(index, 1);
  }

  toString() {
    const fones = this.telefones.map(t => t.toString()).join(', ');
    return `Empresa: ${this.razaoSocial} | CNPJ: ${this.#cnpj} | Email: ${this.email}\n` +
           `  Endereço: ${this.endereco.toString()}\n` +
           `  Telefones: ${fones}\n` +
           `  Total de clientes: ${this.clientes.length}`;
  }
}