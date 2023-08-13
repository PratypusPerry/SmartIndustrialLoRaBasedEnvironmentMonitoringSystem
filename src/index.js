import React from 'react';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import Login from './login_page/login.js';
import Logout from './login_page/logout.js';
import Profile from './login_page/profile.js';
import Landing from './landing_page/landing.jsx';
const root = createRoot(document.getElementById('root'));

root.render(
 <Auth0Provider
    domain="anurag-tenant.us.auth0.com"
    clientId="wx6XEcu4KbUhKTCDgxSz0jYdXjc3cHn6"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <Landing/>
    <Profile/>    
    <Logout />
  </Auth0Provider>, 
  
);




