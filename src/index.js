import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './i18n';
import reportWebVitals from './reportWebVitals';
import { Fade } from 'react-awesome-reveal';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Fade>
    <App />
  </Fade>
);

reportWebVitals();
