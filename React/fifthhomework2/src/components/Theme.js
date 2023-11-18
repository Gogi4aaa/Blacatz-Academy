import React from "react"
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
export default function addTheme(Component){
    const darkTheme = createTheme({
        palette: {
          mode: 'dark',
        },
      });
    function Theme(props){
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <Component {...props}/>
            </ThemeProvider>
    }
    
    return Theme;
}