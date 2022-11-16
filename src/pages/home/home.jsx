import { useSelector } from 'react-redux';
import { getUser } from 'redux/auth/authSelectors';

import { HomeStyled } from 'pages/home/HomeStyled';

import useAuth from 'hooks/useAuth';
import noLogsImg from 'images/no-logs.jpg';
import logsImg from 'images/login.jpg';

export default function Home() {
  const { name } = useSelector(getUser)
  const isLogin = useAuth();

  return (
    <HomeStyled>
      <img src={isLogin ? logsImg : noLogsImg} alt="" />
      {isLogin ? <h2>Welcome to Phonebook!</h2> : <h2>Please login to use Phonebook</h2>}
      {isLogin && <span>Hallo, <br/>{name}!</span>}
      
    </HomeStyled>
  );
}
