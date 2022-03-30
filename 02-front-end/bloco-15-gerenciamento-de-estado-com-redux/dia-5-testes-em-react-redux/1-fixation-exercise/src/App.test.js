import { screen, cleanup } from '@testing-library/react';
import renderWithRedux from './services/renderWithRedux';
import App from './App';
import userEvent from '@testing-library/user-event';

describe('testing clicks', () => {
  beforeEach(cleanup);

  test('the page should has a button and a text 0', () => {
    renderWithRedux(<App />);
    const buttonAdicionar = screen.queryByText('Clique aqui');

    expect(buttonAdicionar).toBeInTheDocument();
    expect(screen.getByText('0')).toBeInTheDocument();
  });

  test('a click in a button should increment the value of clicks', () => {
  renderWithRedux(<App />, { initialState: { clickReducer: { counter: 5 }}});

  expect(screen.getByText('5')).toBeInTheDocument();
  });

  test('the button click works', () => {
    renderWithRedux(<App />);

    const buttonAdicionar = screen.getByRole('button');
    userEvent.click(buttonAdicionar);

    expect(screen.getByText('1')).toBeInTheDocument();
  });

  test('clicking the button with previous states', () => {
    renderWithRedux(<App />, { initialState: { clickReducer: { counter: 10 } } });

    const count = screen.getByText('10');
    expect(count).toBeInTheDocument();

    const buttonAdicionar = screen.getByRole('button');
    userEvent.click(buttonAdicionar);
    expect(screen.getByText('11')).toBeInTheDocument();
  });
});