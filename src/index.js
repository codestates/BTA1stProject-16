import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {console.log(process.env.REACT_APP_POLYGON_ZK_EVM_RPC_URL)}
    <App />
  </React.StrictMode>
);

reportWebVitals();
