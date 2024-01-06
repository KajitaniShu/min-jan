import React from 'react';
import '@mantine/core/styles.css';
import { Routes, Route } from 'react-router-dom';
import { Home } from "./pages/Home"
import { CreateRoom } from "./pages/CreateRoom"
import { Room } from "./pages/Room"
import { MantineProvider, createTheme, rem } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import '@mantine/notifications/styles.css';

const theme = createTheme({
  /** Your theme override here */
});

function App() {
  return (
    <MantineProvider theme={theme}>
      <Notifications position='bottom-left' limit={3} zIndex={0}
        styles={{
          root: { fontSize:1 }
      }}/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/room" element={<CreateRoom />} />
      <Route path="/room/:id" element={<Room />} />
    </Routes>
    </MantineProvider>
  );
}

export default App;
