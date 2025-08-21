import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ShopContextProvider from './Context/ShopContext';
import { AuthProvider } from "../src/Context/AuthContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
    <ShopContextProvider>
    <App />
    </ShopContextProvider>
    </AuthProvider>
  </React.StrictMode>
);

reportWebVitals();
