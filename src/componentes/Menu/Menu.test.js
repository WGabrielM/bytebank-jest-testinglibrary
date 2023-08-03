import Menu from './index';
const { render, screen } = require('@testing-library/react');

test('Deve renderizar um link para página inicial', () => {
  render(<Menu />);
  const linkPaginaInicial = screen.getByText('Inicial');
  expect(linkPaginaInicial).toBeInTheDocument();
});

test('Deve renderizar uma lista de links', () => {
  render(<Menu />);
  //   Verifica quando tem vários itens
  const listaDeLinks = screen.getAllByRole('link');
  //   Verifica se renderiza a quantidade passada
  expect(listaDeLinks).toHaveLength(4);
});

// Verifica que não deve renderiza esse elemento
test('Não deve renderizar o link para extrato', () => {
  render(<Menu />);
  const listaDeLinks = screen.queryByText('Extrato');
  expect(listaDeLinks).not.toBeInTheDocument();
});

test('Deve renderizar uma lista de links com a classe link', () => {
  render(<Menu />);
  const links = screen.getAllByRole('link');
  links.forEach((link) => expect(link).toHaveClass('link'));
  // Criando snapshot
  expect(links).toMatchSnapshot();
});
