import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Layout from './components/UI/Layout';

import './index.css';

function App() {
  return (
    <div className="App">
      <Layout>
      </Layout>
    </div>
  );
  }

export default App;