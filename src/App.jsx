import React from 'react';
import ReactDOM from 'react-dom';
import {Layout} from "./components/Layout.jsx";
import './scss/app.scss';

ReactDOM.render(
  <React.StrictMode>
      <Layout/>
  </React.StrictMode>,
  document.getElementById('root')
);