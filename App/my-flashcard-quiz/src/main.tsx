// src/index.tsx
import React from 'react';
import ReactDOM from 'react-dom';
//import { BrowserRouter as Router } from 'react-router-dom';
//import App from './App';
//import './styles.css'; // Import the CSS file
import './index.css';
import AppRouter from './AppRouter';

ReactDOM.render(
  
    <React.StrictMode>
      <AppRouter />
    </React.StrictMode>,
  
  document.getElementById('root')
);
