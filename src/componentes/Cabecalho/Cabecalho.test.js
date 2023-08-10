import Cabecalho from './index';
const { render, screen } = require('@testing-library/react');

test('Primeiro teste', () => {
  const numero = 10;
  expect(numero).toBe(10);
});

// Retorna um elemento de texto que for encontrado
test('Deve renderizar o nome do usuário logado', () => {
  render(<Cabecalho />);
  const nomeUsuario = screen.getByText('Joana Fonseca Gomes');
  expect(nomeUsuario).toBeInTheDocument();
});
