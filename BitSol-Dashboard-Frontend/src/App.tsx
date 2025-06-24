import { createTheme, ThemeProvider } from "@mui/material";
import MainPage from "./components/Auth/Register/MainPage";

const theme = createTheme({
  typography: {
    fontFamily: 'Inter, Sans-Serif'
  },
  palette: {
    primary: {
      main: '#1565D8'
    },
    'white-selected': {
      main: '#F5F9FF'
    },
    customGrey: {
      main: '#8692A6'
    },
    tertiary: {
      light: '#F572B9',
      main: '#EE4878'
    }
  }
})

export default function App() {
  return <ThemeProvider theme={theme}>
    <MainPage />
  </ThemeProvider>
};