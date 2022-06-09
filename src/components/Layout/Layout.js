import { Outlet } from 'react-router-dom';
import { Nav, StyledNavLink } from './Layout.styled';
import { useSelector } from 'react-redux';
import UserMenu from '../UserMenu/UserMenu';

const Layout = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  return (
    <div>
      <Nav>
        <div>
          <StyledNavLink to="/">Home</StyledNavLink>
          {isLoggedIn && <StyledNavLink to="/contacts">Contacts</StyledNavLink>}
        </div>

        {isLoggedIn ? (
          <UserMenu />
        ) : (
          <div>
            <StyledNavLink to="/register">Register</StyledNavLink>
            <StyledNavLink to="/login">Login</StyledNavLink>
          </div>
        )}
      </Nav>
      <Outlet />
    </div>
  );
};

export default Layout;
