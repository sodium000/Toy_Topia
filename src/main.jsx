import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { HeadProvider } from "react-head";
import router from '../Routes/Routes';
import AuthProvider from './AuthProvider/AuthProvider';
import { RouterProvider } from 'react-router';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HeadProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </HeadProvider>
  </StrictMode>
)
