import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export default function PrivateRoute({ component: routerComponent }) {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  return isLoggedIn ? routerComponent : <Navigate to={'/login'} />;
}
