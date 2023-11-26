import React from 'react';
import '@mantine/core/styles.css';
import { Routes, Route } from 'react-router-dom';
import { Home } from "./pages/Home"
import { Room } from "./pages/Room"
import { MantineProvider, createTheme } from '@mantine/core';
const theme = createTheme({
  /** Your theme override here */
});

function App() {
  return (
    <MantineProvider theme={theme}>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/room" element={<Room />} />
    </Routes>
    </MantineProvider>
  );
}

export default App;
