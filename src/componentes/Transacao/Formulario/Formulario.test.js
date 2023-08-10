import Formulario from './index';
import userEvent from '@testing-library/user-event';
const { render, screen } = require('@testing-library/react');

describe('Deve renderizar um campo de input', () => {
    test('', () => {
      render(<Formulario />);
      const campoTexto = screen.getByPlaceholderText('Digite um valor');
      expect(campoTexto).toBeInTheDocument();
    });
    
    test(' com o type number', () => {
      render(<Formulario />);
      const campoTexto = screen.getByPlaceholderText('Digite um valor');
      expect(campoTexto).toHaveAttribute('type', 'number');
    });
    
    test(' que pode ser preenchido ', () => {
      render(<Formulario />);
      const campoTexto = screen.getByPlaceholderText('Digite um valor');
      userEvent.type(campoTexto, '50');
      expect(campoTexto).toHaveValue(50);
    });
})
