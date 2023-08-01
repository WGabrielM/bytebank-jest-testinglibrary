const { render } = require("@testing-library/react");
import Cabecalho from './index'

// Jest teste
test("Primeiro teste", () => {
    const numero = 10;
    expect(numero).toBe(10)
})

// Test library
test("Deve renderizar o nome do usuário logado", () => {
    render(<Cabecalho />)
})