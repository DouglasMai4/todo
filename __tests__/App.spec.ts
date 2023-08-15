import { render, screen } from '@testing-library/vue';
import App from '../src/App.vue';

describe('Todo app tests', () => {
  it('Testa se o app tem o título correto', () => {
    render(App);

    const title = screen.getByTestId('page-title');
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent(/tarefas/i);
  });

  it('Testa se o app exibe uma mensagem caso nenhuma tarefa tenha sido adicionada', () => {
    render(App);

    const errorMsg = screen.getByTestId('empty-msg');
    expect(errorMsg).toBeInTheDocument();
    expect(errorMsg).toHaveTextContent(/nenhuma tarefa adicionada/i);
  });
});