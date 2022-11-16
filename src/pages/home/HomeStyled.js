import styled from 'styled-components';

export const HomeStyled = styled.div`
  margin: auto;
  text-align: center;
  h2 {
    font-size: 28px;
    text-align: center;
    text-shadow: 2px 3px 6px #1900ff; 
    
    animation: changeColor 1500ms linear infinite;

    @keyframes changeColor {
      0% {
        filter: hue-rotate(0deg);
      }
      100% {
        filter: hue-rotate(360deg);
      }
    }
  }

  img {
    height: 280px;
    width: 300px;
  }

  span {
    display: inline-block;
    position: relative;
    bottom: 343px;
    right: 71px;
    font-size: 28px;
    font-weight: 900;
    color: #3b5998;
    text-shadow: 2px 3px 6px #00ffff;

    -webkit-transform: rotate(-7deg);
    transform: rotate(-7deg);    
  }
`;
