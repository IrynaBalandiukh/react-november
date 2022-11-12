import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom"

import App from './App';
import {AuthProvider} from "./hoc";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
      <BrowserRouter>
          <React.StrictMode>
              <App />
          </React.StrictMode>
      </BrowserRouter>
  </AuthProvider>
);
