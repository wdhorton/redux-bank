import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Dashboard from './components/Dashboard';

render(
  <Dashboard />,
  document.getElementById('root')
);
