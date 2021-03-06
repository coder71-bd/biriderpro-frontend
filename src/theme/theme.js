import { cyan, green, indigo, lightBlue, red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: red[500],
    },
    secondary: {
      main: indigo['500'],
    },
    success: {
      main: green['A700'],
    },
    info: {
      main: cyan[300],
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
