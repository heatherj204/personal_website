import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import './index.css';
import App from './App';
import NotFound from "./pages/NotFound";
import Building from "./pages/Building";
import Nav from "./components/Nav";

function Root() {
  const [mode, setMode] = React.useState('dark');

  const theme = React.useMemo(() =>
    createTheme({
      palette: {
        mode: mode,
        primary: {
          main: '#5a7474',
        },
        secondary: {
          main: '#5a7474',
        },
      },
    }),
    [mode]
  );

  const toggleTheme = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <BrowserRouter>
        <Nav toggleTheme={toggleTheme} mode={mode} />

        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/building" element={<Building />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Root />);