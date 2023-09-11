import { calculaNovoSaldo } from './index';

it('Deve retornar o valor do saldo atualizado com o rendimento', () => {
  // fn() permite utilizar funções dentro dos testes
  const calculaRendimento = jest.fn((saldo) => saldo + saldo * 0.005);

  const saldo = 100;

  const novoSaldo = calculaRendimento(saldo);

  expect(novoSaldo).toBe(100.5);
  // Verifica se foi chamado essa função
  expect(calculaRendimento).toBeCalled();
  // Verifica se foi chamado com os argumentos específicos
  expect(calculaRendimento).toHaveBeenCalledWith(saldo);

  // Em casos reais é melhor dividir esses três expect em três testes para ficar mais organizado
});

// Conceito do TDD, criar um teste para falhar e realizar os devidos ajustes
describe('Quando eu realizo uma transação', () => {
  test('Que é um depósito, o saldo deve aumentar', () => {
    const transacao = {
      transacao: 'Depósito',
      valor: 50,
    };

    const novoSaldo = calculaNovoSaldo(transacao, 100);

    expect(novoSaldo).toBe(150);
  });
});
