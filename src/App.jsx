import React from 'react';
import './App.css';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import orange from '@material-ui/core/colors/orange';
import Covid19 from './components/Covid19';

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      // main: '#A59ACA',
      main: '#f39800',
    },
    secondary: orange,
  },
});

const App = () => {
  return (
    <MuiThemeProvider
      theme={darkTheme}
    >
      <CssBaseline />
      <main className="App-main">
        <Covid19 />
      </main>
    </MuiThemeProvider>
  );
}

export default App;
