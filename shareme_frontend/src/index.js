import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';

import App from './App';
import './index.css';

const root = createRoot(document.getElementById('root'))

root.render(<GoogleOAuthProvider clientId={'428898217143-rn1h8i0ov62c7qsoem8n8pbci1oq8ij0.apps.googleusercontent.com'}>
  <Router>
    <App />
  </Router>
</GoogleOAuthProvider>);
