import { createTheme, ThemeProvider } from "@mui/material";
import MainPage from "./components/Auth/Register/MainPage";
const theme = createTheme({
  typography: {
    fontFamily: 'Inter, Sans-Serif'
  },

})

export default function App() {
  return <ThemeProvider theme={theme}>
    <MainPage />
  </ThemeProvider>
};