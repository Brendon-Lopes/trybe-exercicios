import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('Verifica se existe o campo "Email"', () => {
  render(<App />);
  const email = screen.getByLabelText('Email');
  expect(email).toBeInTheDocument();
  expect(email).toHaveProperty('type', 'email');
});

test('Verifica se o botão "Enviar" é renderizado', () => {
  render(<App />);
  const button = screen.getByTestId('id-send');
  expect(button).toBeInTheDocument();
  expect(button).toHaveProperty('type', 'button');
  expect(button).toHaveValue('Enviar');
});

test('Verifica se existem dois botões', () => {
  render(<App />);
  const buttons = screen.getAllByRole('button');
  expect(buttons).toHaveLength(2);
});

test('Verifica se o botão e campo do email estão funcionando', () => {
  render(<App />);

  const EMAIL_USER = 'email@email.com.br'

  const textEmail = screen.getByTestId('id-email-user');
  expect(textEmail).toBeInTheDocument();
  expect(textEmail).toHaveTextContent('Valor:');

  const btnSend = screen.getByTestId('id-send');
  const inputEmail = screen.getByLabelText('Email');
  expect(btnSend).toBeInTheDocument();
  expect(inputEmail).toBeInTheDocument();
  userEvent.type(inputEmail, EMAIL_USER);
  userEvent.click(btnSend);

  expect(inputEmail).toHaveValue('');
  expect(textEmail).toHaveTextContent(`Valor: ${EMAIL_USER}`);
});
