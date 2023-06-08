import React,{useState} from 'react';
import Layout from "./components/Layout";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { blue } from '@mui/material/colors';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});
const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: blue[500],
    },    
  },
});

export const appContext = React.createContext({
  theme: lightTheme,
  translationLanguage:'all'
});

function App() {
  <ThemeProvider theme={lightTheme}>
    <appContext.Provider>
      return (
        <div>
          <Layout >
            <div>
              This is the App
            </div>
          </Layout>
        </div>
      );
    </appContext.Provider>
  </ThemeProvider>
}

export default App;
