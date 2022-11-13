import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BlogsContextProvider } from './Context/BlogsContext';
import { UserContextProvider } from './Context/UserContext';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <UserContextProvider>
      <BlogsContextProvider>
        <App />
      </BlogsContextProvider>
    </UserContextProvider>
  </React.StrictMode>
);
