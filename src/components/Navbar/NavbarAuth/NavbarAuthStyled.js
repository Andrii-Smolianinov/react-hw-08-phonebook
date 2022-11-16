import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavBarAuth = styled.div`
  max-width: 100%;
  margin: 0;
  padding: 0;  
`;

export const Link = styled(NavLink)`
  display: inline-flex;
  padding: 4px 8px;
  align-items: center;
  text-decoration: none;
  font-size: 24px;
  color: #c0f306;
  text-shadow: 2px 3px 6px #00ffff;
  font-weight: 600;

  &.active {
    color: #020080;
  }
  :hover:not(.active),
  :focus:not(.active) {
    color: #c482f0;
  }
  svg {
    margin-right: 4px;
  }
`;