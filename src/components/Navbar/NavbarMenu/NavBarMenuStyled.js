import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  display: inline-flex;
  margin: 0 0 0 10px;
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

export const StyledUl = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  list-style: none;
`;
