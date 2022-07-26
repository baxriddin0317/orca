import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom"
import { ModalProvider } from './context/ModalContext';
import { GlobalProvider } from './context/GlobalContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ModalProvider>
        <GlobalProvider>
          <App />
        </GlobalProvider>
      </ModalProvider>
    </BrowserRouter>
  </React.StrictMode>
);
