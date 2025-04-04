import { createTheme } from '@mui/material/styles';
import { teal, orange, grey } from '@mui/material/colors';

const theme = createTheme({
    palette: {
        primary: {
            light: teal[50],
            main: teal[900],
            dark: grey[900]
        },
        secondary: {
            main: orange[100],
        }
    },
    typography: {
        fontFamily: 'var(--font-sans)', 
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '20px',
                    boxShadow: 'none',
                    fontSize: '16px',
                    '&.MuiButton-contained.MuiButton-containedPrimary': {
                        color: 'white',
                    },
                    '&.MuiButton-outlined.MuiButton-outlinedPrimary': {
                        color: 'rgb(19, 78, 74)', 
                        borderColor: 'rgb(19, 78, 74)',
                        '&:hover': {
                            borderColor: 'rgb(19, 78, 74)', 
                        },
                    },
                    textTransform: 'none', 
                },
            },
        },
    },
});

export default theme;
