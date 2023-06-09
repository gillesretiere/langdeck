import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route,} from "react-router-dom";

import './index.css';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


import { AuthProvider } from './context/AuthProvider';
import reportWebVitals from './reportWebVitals';

import LanguageDeck from "./pages/LanguageDeck"

import CssBaseline from '@mui/material/CssBaseline';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
      <AuthProvider>
          <CssBaseline />
          <Routes>
            <Route path="/" element={<LanguageDeck />} />                     
            <Route path="*" element={
                <main style={{ padding: "1rem" }}>
                  <p>There's nothing here!</p>
                </main>
          }
          />
          </Routes>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
