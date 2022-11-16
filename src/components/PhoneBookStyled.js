import styled from 'styled-components';

export const PhoneBookStyled = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding: 15px;
  font-weight: 500;
  font-size: 16px;
  color: #3b5998;
  background-color: #b1c5f1;
  @media screen and (min-width: 480px) {
    padding: 25px;
  }
  @media screen and (min-width: 768px) {
    padding: 30px;
  }

  & h1 {
    margin-top: 0px;
    font-size: 34px;
    font-weight: 750;
    color: #3b5998;
    text-align: center;
  }
  & span {
    display: inline-block;
    width: 30px;
    height: 47px;
    color: #ffff;
    background-color: rgb(59, 89, 152);
    border-radius: 5px;
    text-align: end;
    padding-right: 2px;
  }

  border: 10px solid;
  border-image-slice: 1;
  border-width: 5px;
  border-image-source: linear-gradient(to left, #021aec, #fdf904ff);
  box-shadow: #04f1e5ff 0px 15px 28px,
    rgba(11, 31, 1, 1) 0px 15px 28px;
`;
