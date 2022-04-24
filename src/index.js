import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./index.css";
import {TransactionsProvider} from "./Context/TransactionContext"


ReactDOM.render(
  <TransactionsProvider >
  <React.StrictMode>
  <App />
</React.StrictMode>
</TransactionsProvider>,
  document.getElementById('root')
);


