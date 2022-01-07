import { green, lightBlue, pink, red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: red[500],
    },
    secondary: {
      main: pink['A700'],
    },
    success: {
      main: green['A700'],
    },
    logoutBtn: {
      main: red[700],
    },
    text: {
      header: lightBlue['A700'],
    },
  },
});

export default theme;
