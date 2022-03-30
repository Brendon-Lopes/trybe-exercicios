import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import App from '../App';
import { createStore, combineReducers } from 'redux';
import clickReducer from '../reducers';

const renderWithRedux = (
  component,
  { initialState, store = createStore(combineReducers({ clickReducer }), initialState) } = {},
) => ({
  ...render(<Provider store={ store }><App /></Provider>),
});

export default renderWithRedux;
