import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/css/index.css';
import Amplify from "aws-amplify";
import "animate.css";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import awsconfig from "./aws-exports";
Amplify.configure({
  ...awsconfig,
  Analytics: {
    disabled: true
  }
});

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#C1AF11"
    },
    secondary: {
      main: '#1B293F'
    }
  }
},
)

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById('root')
);
