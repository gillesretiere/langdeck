import React, { useState } from "react";
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

const DarkLightModeToggle = () => {
    const [isDark, setIsDark] = useState(true);
    const [darkState, setDarkState] = useState(false);
    const palletType = darkState ? "dark" : "light";
    /*
    const darkTheme = createTheme({
      palette: {
        type: palletType,
      }
    });
    */
    const handleThemeChange = () => {
      setDarkState(!darkState);
    };

    return (
    <FormGroup>
      <FormControlLabel control={<Switch checked={darkState} onChange={handleThemeChange} />} label="Switch to dark mode" />
    </FormGroup>
    )
}

export default DarkLightModeToggle