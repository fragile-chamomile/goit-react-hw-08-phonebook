import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Layout from './Layout/Layout';

// Code Splitting (разделение кода)
const HomePage = lazy(() => import('../pages/HomePage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage'));

const App = () => {
  return (
    <div>
      <Suspense fallback>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="contacts" element={<ContactsPage />} />
          </Route>
          <Route path="*" element={<Navigate to={'/'} />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
