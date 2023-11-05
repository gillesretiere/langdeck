import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';

import './index.css';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { AuthProvider } from './context/AuthProvider';

import reportWebVitals from './reportWebVitals';

import Languages from "./pages/Languages";
import Decks from "./pages/Decks";
import Scenes from "./pages/Scenes";
import LanguagePage from "./pages/LanguagePage";
import StoryPage from "./pages/StoryPage";
import SaynetePage from "./pages/SaynetePage";

import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
  palette: {
    primary: {
      type: 'ligth',
      main: '#fefefe',
    },
    secondary: {
      main: '#f50057',
    },

  },
  props: {
    MuiTooltip: {
      arrow: true,
    },
  },
    typography: {
      fontFamily: 'Quicksand',
      fontWeigthLigth: 400,
      fontWeigthRegular: 500,
      fontWeigthMedium: 600,
      fontWeigthBold: 700,
    }

});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <CssBaseline />
          <Routes>
            <Route path="/" element={<LanguagePage />} />
            <Route path="story_page/:id" element={<StoryPage />} />
            <Route path="saynete_page/:id" element={<SaynetePage />} />
            <Route path="decks/:id" element={<Decks />} />
            <Route path="scenes/:id" element={<Scenes />} />
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
