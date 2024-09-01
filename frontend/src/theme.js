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
            dark: '#c62828',
            light: '#ef9a9a',
            contrastText: '#fff',
        },
        secondary: {
            main: '#00D2E9',
            dark: '#00aecb',
            light: '#abecf5',
            contrastText: '#00626a',
        },
        error: {
            main: red.A400,
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
        fontFamily: 'articulat-cf',
        fontWeigthLigth: 400,
        fontWeigthRegular: 500,
        fontWeigthMedium: 600,
        fontWeigthBold: 700,
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
    }

});

export default theme;