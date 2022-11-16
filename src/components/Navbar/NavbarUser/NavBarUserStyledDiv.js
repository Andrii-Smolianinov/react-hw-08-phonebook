import styled from 'styled-components';

export const NavBarUserStyledDiv = styled.div`
  & button {
    padding: 5px 8px;
    margin: 10px 0 0 10px;
    width: 128px;
    font-weight: 600;
    color: #b1c5f1;
    align-content: center;
    border-radius: 3px;
    border: 2px solid #3b5998;
    background-color: #60739c;
    box-shadow: 7px 0px 16px -2px rgba(4, 241, 229, 1);
    transition: background-color 250ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1);

    svg {
      margin: 0 0 0 3px;
    }
  }

  & button:hover {
    color: #3b5998;
    outline: transparent;
    border: 2px solid #3b5998;
    background-color: #b1c5f1;
  }  
`;
