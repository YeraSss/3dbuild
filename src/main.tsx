import React from 'react';
import ReactDOM from 'react-dom/client';
import { Viewer } from './viewer';
import "./index.css";
import AppBar from './appBar/appBar';
import ClippedDrawer from './ClippedDrawer/Drawer';
import { StyledEngineProvider } from '@mui/material/styles';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Viewer canvasId={"viewer"} />
  </React.StrictMode>
);


ReactDOM.createRoot(document.getElementById('appbar')!).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <AppBar />
    </StyledEngineProvider>
  </React.StrictMode>
);

ReactDOM.createRoot(document.getElementById('clipped-drawer')!).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <ClippedDrawer />
    </StyledEngineProvider>
  </React.StrictMode>
);

