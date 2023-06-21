import { useState } from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { blue, red, green } from '@mui/material/colors';
import Switch from '@mui/material/Switch';
import CssBaseline from '@mui/material/CssBaseline';

function App() {
  const [mode, setMode] = useState("light");
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: red[500],
      },          
    },
  });
  const lightTheme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: green[500],
      },    
    },
  });

  const selectedTheme = mode === "dark" ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={selectedTheme}>
        <CssBaseline />
        <h1>Switch to dark mode</h1>
        <Switch onChange={() => setMode(mode === "light" ? "dark" : "light")} />
    </ThemeProvider>
  );
}

export default App;
