import userEvent from '@testing-library/user-event';
const { render, screen } = require('@testing-library/react');
import Transacoes from './index';



test('Deve renderizar o mesmo component com props atualizadas', () => {
  render(<Transacoes transacoes={transacao} />);
  const lista = screen.getByRole('listitem');
  expect(lista).toBeInTheDocument();
});