// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Ensure this line is present
import App from './App';
import { ThemeProvider } from './context/ThemeContext';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
