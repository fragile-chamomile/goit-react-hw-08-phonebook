import { Outlet } from 'react-router-dom';
import { Nav, StyledNavLink } from './Layout.styled';

const Layout = () => {
  return (
    <div>
      <Nav>
        <StyledNavLink to="/">Home</StyledNavLink>
        <StyledNavLink to="/Register">Register</StyledNavLink>
        <StyledNavLink to="/Login">Login</StyledNavLink>
        <StyledNavLink to="/Contacts">Contacts</StyledNavLink>
      </Nav>
      <Outlet />
    </div>
  );
};

export default Layout;
