import { Telefone, Endereco, Cliente, Empresa } from './cadastro.js';

const empresa = new Empresa(
  '12824890493',
  'Solutions Ltda',
  'contato@techsolutions.com'
);

empresa.setEndereco(
  new Endereco('paulistinha', '1000', 'vela vista', 'são paulo', 'SP', '01310100')
);

empresa.adicionarTelefone(new Telefone('11', '30001000'));
empresa.adicionarTelefone(new Telefone('11', '30002000'));

const clientes = [
  {
    cpf: '111.111.111-11', nome: 'Ana Souza',    email: 'ana@email.com',
    end: new Endereco('Rua das Flores',   '10', 'Centro',     'Campinas',     'SP', '13010-010'),
    tel: [new Telefone('19', '98000-0001'), new Telefone('19', '3200-0001')]
  },
  {
    cpf: '222.222.222-22', nome: 'Bruno Lima',   email: 'bruno@email.com',
    end: new Endereco('Rua dos Pinheiros', '20', 'Jardins',    'São Paulo',    'SP', '01420-020'),
    tel: [new Telefone('11', '98000-0002'), new Telefone('11', '3300-0002')]
  },
  {
    cpf: '333.333.333-33', nome: 'Carla Dias',   email: 'carla@email.com',
    end: new Endereco('Av. Atlântica',   '30', 'Copacabana', 'Rio de Janeiro','RJ', '22010-030'),
    tel: [new Telefone('21', '98000-0003'), new Telefone('21', '3400-0003')]
  },
  {
    cpf: '444.444.444-44', nome: 'Daniel Cruz',  email: 'daniel@email.com',
    end: new Endereco('Rua das Acácias', '40', 'Savassi',    'Belo Horizonte','MG', '30130-040'),
    tel: [new Telefone('31', '98000-0004'), new Telefone('31', '3500-0004')]
  },
  {
    cpf: '555.555.555-55', nome: 'Eduarda Melo', email: 'eduarda@email.com',
    end: new Endereco('Av. Beira-Mar',  '50', 'Centro',     'Florianópolis', 'SC', '88010-050'),
    tel: [new Telefone('48', '98000-0005'), new Telefone('48', '3600-0005')]
  }
];

clientes.forEach(({ cpf, nome, email, end, tel }) => {
  const cliente = new Cliente(cpf, nome, email, end);
  tel.forEach(t => cliente.adicionarTelefone(t));
  empresa.adicionarCliente(cliente);
});

export { empresa };

export function gerarDescricao(empresa) {

  let descricao = `\n--------\n`;
  descricao += `  Descrição da empresa\n`;
  descricao += `----------\n`;
  descricao += `  Razão Social: ${empresa.getRazaoSocial()}\n`;
  descricao += `  CNPJ: ${empresa.cnpj}\n`;
  descricao += `  E-mail: ${empresa.getEmail()}\n`;

  if (empresa.getEndereco()) {
    const end = empresa.getEndereco();
    descricao += `  Endereço: ${end.toString()}\n`;
  }

  if (empresa.getTelefones().length > 0) {
    const fones = empresa.getTelefones().map(t => t.toString()).join('  |  ');
    descricao += `  Telefones: ${fones}\n`;
  }

  descricao += `\n----------\n`;
  descricao += `  CLIENTES (${empresa.getClientes().length})\n`;
  descricao += `----------\n`;

  empresa.getClientes().forEach((cliente, i) => {
    descricao += `\n  Cliente #${i + 1}\n`;
    descricao += `  ---------\n`;
    descricao += `  Nome: ${cliente.getNome()}\n`;
    descricao += `  CPF: ${cliente.cpf}\n`;
    descricao += `  E-mail: ${cliente.getEmail()}\n`;

    if (cliente.getEndereco()) {
      descricao += `  Endereço: ${cliente.getEndereco().toString()}\n`;
    }

    if (cliente.getTelefones().length > 0) {
      const fones = cliente.getTelefones().map(t => t.toString()).join('  |  ');
      descricao += `  Telefones: ${fones}\n`;
    }
  });

  descricao += `\n--------\n`;
  return descricao;
}