import React from 'react';
import App from './App';
import { createRoot } from 'react-dom/client';
import './index.css';

import { server } from './mocks/handlers';

async function deferRender() {
  if (process.env.NODE_ENV !== 'development') {
    return;
  }
  await server.start();
}

console.log(process.env.NODE_ENV)

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<App />);
deferRender();
