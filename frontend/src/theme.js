import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

/* A custom theme for this app
https://mui.com/material-ui/customization/color/
https://m2.material.io/design/color/the-color-system.html#color-theme-creation
https://m2.material.io/design/color/the-color-system.html#tools-for-picking-colors

*/

const theme = createTheme({
    palette: {
        primary: {
            main: '#f44336',
            light: '#ef9a9a',
            dark: '#c62828',
            contrastText: '#fff',
        },
        secondary: {
            main: '#00D2E9',
            light: '#abecf5',
            dark: '#00aecb',
            contrastText: '#00626a',
        },
        analogous: {
            main: '#f4a236',
            light: '#fdf2e1',
            dark: '#ed8720',
            contrastText: '#d65116',
        },        
        error: {
            main: red.A400,
        },
        triadic : {
            main: '#e7f436',
            light: '#fdfee8',
            dark: '#b6b21d',
            complementary: '#36f443',
        },

        white: {
            main: '#ffffff',
        },

        blue_primary: {
            main: '#96C2DB',
        },
        blue_secondary: {
            main: '#E5EDF1',
        },
        blue_tertiary: {
            main: '#6d9ab3',
        },
    },

    typography: {
        primary:{
            fontFamily: 'articulat-cf',
            fontWeigthLigth: 400,
            fontWeigthRegular: 500,
            fontWeigthMedium: 600,
            fontWeigthBold: 700,
        },
        secondary :{
            fontFamily: 'artifex-cf',
            fontWeigthLigth: 400,
            fontWeigthRegular: 500,
            fontWeigthMedium: 600,
            fontWeigthBold: 700,
        },
    },

    /*
        https://stackoverflow.com/questions/39138380/how-to-apply-different-color-in-appbar-title-material-ui
    */

    components: {
        MuiAppBar: {
            styleOverrides: {
                colorPrimary: {
                    backgroundColor: "white",
                    color: "#f74216",
                }
            }
        }
    },
    cssVariables: true,

});

export default theme;