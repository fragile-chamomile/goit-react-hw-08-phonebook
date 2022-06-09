import { lazy, Suspense, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as authOperations from './redux/auth/auth-operations';

import Layout from './components/Layout/Layout';
import PublicRoute from './components/PublicRoute';
import PrivateRoute from './components/PrivateRoute';

// Code Splitting (разделение кода)
const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage/ContactsPage'));

const App = () => {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth.isLoggedIn);
  const isFetchingCurrentUser = useSelector(
    state => state.auth.isFetchingCurrentUser
  );

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return (
    !isFetchingCurrentUser && (
      <div>
        <Suspense fallback>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route
                path="/"
                element={<PublicRoute component={<HomePage />} />}
              />
              <Route
                path="contacts"
                element={<PrivateRoute component={<ContactsPage />} />}
              />
              <Route
                path="register"
                element={
                  <PublicRoute component={<RegisterPage />} restricted />
                }
              />
              <Route
                path="login"
                element={<PublicRoute component={<LoginPage />} restricted />}
              />
            </Route>

            <Route
              path="*"
              element={
                auth ? <Navigate to={'/contacts'} /> : <Navigate to={'/'} />
              }
            />
          </Routes>
        </Suspense>
      </div>
    )
  );
};

export default App;
