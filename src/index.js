import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
import { BlogsContextProvider } from './Context/BlogsContext';
import { UserContextProvider } from './Context/UserContext';
root.render(
  <React.StrictMode>
    <UserContextProvider>
      <BlogsContextProvider>
        <App />
      </BlogsContextProvider>
    </UserContextProvider>
  </React.StrictMode>
);
