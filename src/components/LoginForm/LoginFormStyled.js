import styled from 'styled-components';


export const LoginFormStyled = styled.form`
padding: 25px;
  display: inline-flex;
  flex-direction: column;  
  align-items: flex-end;

  & input {
    margin: 0 0 5px 10px;
  }

  & button {    
    padding: 5px 8px;
    margin: 20px 0 10px;    
    width: 128px;
    font-weight: 600;
    color: #b1c5f1;
    border-radius: 3px;
    border: 2px solid #3b5998;
    background-color: #60739c;
    box-shadow: 7px 0px 16px -2px rgb(6, 41, 238);
    transition: background-color 250ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1);

    svg {
      position: relative;
      left: 5px;
      top: 3px;

      width: 16px;
      height: 15px;
    }
  }
  
  & button:hover {
    color: #3b5998;
    outline: transparent;
    border: 2px solid #3b5998;
    background-color: #b1c5f1;
  }
`;