import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AuthContentProvider } from "./context/authContext/AuthContext";

ReactDOM.render(
  <React.StrictMode>
    <AuthContentProvider>
    <App />
    </AuthContentProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
