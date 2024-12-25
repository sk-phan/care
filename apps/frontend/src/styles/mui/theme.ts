import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
        main: 'rgb(19, 78, 74)', 
        },
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
