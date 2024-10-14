import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <ThemeProvider>
      <Layout />
    </ThemeProvider>
  );
}

export default App;
