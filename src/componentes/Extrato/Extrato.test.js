import userEvent from '@testing-library/user-event';
const { render, screen } = require('@testing-library/react');
import Extrato from './index';

test('Deve renderizar uma lisat de transação', () => {
  const transacoes = [
    {
      transacao: 'Depósito',
      valor: 100,
    },
  ];
  render(<Extrato transacoes={transacoes} />);
  const lista = screen.getByRole('listitem');
  expect(lista).toBeInTheDocument();
});
