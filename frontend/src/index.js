import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes'
import GlobalStyles from "./styles/globalStyle";

ReactDOM.render(
  <>
    <Routes />
    <GlobalStyles />
  </>,
  document.getElementById('root')
);