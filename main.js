import { empresa, gerarDescricao } from './teste.js';

console.log(gerarDescricao(empresa));

console.log('exemplos de maiúsculo/minúsculo');
console.log('razão social maiusculo :', empresa.getRazaoSocialMaiusculo());
console.log('razão social minusculo :', empresa.getRazaoSocialMinusculo());

const primeiroCliente = empresa.getClientes()[0];
console.log('nome 1 cliente (maiusc):', primeiroCliente.getNomeMaiusculo());
console.log('nome 1 cliente (minusc):', primeiroCliente.getNomeMinusculo());
console.log('CPF 1 cliente (maiusc):', primeiroCliente.getCpfMaiusculo());