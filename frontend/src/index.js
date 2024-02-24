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
import SplitSaynetePage from "./pages/SplitSaynetePage";
import StudyPage from './pages/StudyPage';
import QuizPage from './pages/QuizPage';
import QuizPlayPage from './pages/QuizPlayPage';
import StudyPlayPage from './pages/StudyPlayPage';
import SaynetePlayPage from './pages/SaynetePlayPage';
import LessonPage from './pages/LessonPage';
import ThemePage from './pages/ThemePage';
import UnitPage from './pages/UnitPage';
import UnitStoryPage from './pages/UnitStoryPage';
import UnitStoryX3Page from './pages/UnitStoryX3Page';
import ConversationPage from './pages/ConversationPage';
import DuoPage from './pages/DuoPage';
import DuoStartPage from './pages/DuoStartPage';
import DuoStepPage from './pages/DuoStepPage';
import DuoStepSendPage from './pages/DuoStepSendPage';

import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
  palette: {
    primary: {
      main: '#dedbd2',
    },
    secondary: {
      main: '#b0c4b1',
    },
    tertiary: {
      main: '#edafb8',
    },
    white: {
      main: '#ffffff',
    },    
    black: {
      main: '#000000',
    },
    blue_primary:{
      main: '#96C2DB',
    },
    blue_secondary:{
      main: '#E5EDF1',
    },
    blue_tertiary:{
      main: '#6d9ab3',
    },
  },
  props: {
    MuiTooltip: {
      arrow: true,
    },
  },
    typography: {
      fontFamily: 'neue-haas-grotesk-display',
      fontWeigthLigth: 400,
      fontWeigthRegular: 500,
      fontWeigthMedium: 600,
      fontWeigthBold: 700,
    }

});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <AuthProvider>
          <CssBaseline />
            <Routes>
              <Route path="/" element={<LanguagePage />} />
              <Route path="story_page/:id" element={<StoryPage />} />
              <Route path="lesson_page/:id" element={<LessonPage />} />
              <Route path="saynete_page/:id" element={<SaynetePage />} />
              <Route path="split_saynete_page/:id" element={<SplitSaynetePage />} />
              <Route path="study_page/:id" element={<StudyPage />} />
              <Route path="quiz_page/:id" element={<QuizPage />} />
              <Route path="quiz_play_page/:id" element={<QuizPlayPage />} />
              <Route path="study_play_page/:id" element={<StudyPlayPage />} />
              <Route path="saynete_play_page/:id" element={<SaynetePlayPage />} />
              <Route path="decks/:id" element={<Decks />} />
              <Route path="scenes/:id" element={<Scenes />} />
              <Route path="theme_page/:id" element={<ThemePage />} />
              <Route path="unit_page/:id" element={<UnitPage />} />
              <Route path="unit_story_page/:id" element={<UnitStoryPage />} />
              <Route path="unit_story_x3_page/:id" element={<UnitStoryX3Page />} />
              <Route path="conversation_page/:id" element={<ConversationPage />} />
              <Route path="/duo/" element={<DuoPage />} />
              <Route path="/duo_start_page/:id" element={<DuoStartPage />} />
              <Route path="/duo_step_page/:id" element={<DuoStepPage />} />
              <Route path="/duo_step_send_page/:id" element={<DuoStepSendPage />} />
              
              <Route path="*" element={
                <main style={{ padding: "1rem" }}>
                  <p>There's nothing here!</p>
                </main>
              }
              />
            </Routes>
        </AuthProvider>
      </BrowserRouter>
    </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
