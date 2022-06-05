import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const Nav = styled.nav`
  padding: 1rem 0 1rem 1rem;
  background-color: rgba(0, 0, 0, 0.3);
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.3);
`;

export const StyledNavLink = styled(NavLink)`
  padding: 3px 6px;
  text-decoration-line: none;
  font-size: 20px;
  font-weight: 500;

  &:nth-of-type(-n + 3) {
    margin-right: 20px;
  }

  &:visited {
    color: aliceblue;
  }

  &.active {
    border: 1px solid #17a2b8;
    color: #17a2b8;
  }
`;
