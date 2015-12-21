import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Dashboard from './components/Dashboard';

const store = configureStore(initialState);

render(
  <Dashboard />,
  document.getElementById('root')
);
