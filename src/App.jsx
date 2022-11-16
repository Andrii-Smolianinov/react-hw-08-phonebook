import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { current } from 'redux/auth/authOperations';
import { getLoadingUserStatus } from 'redux/auth/authSelectors';

import { Container } from 'components/Container';
import { Navbar } from 'components/Navbar/NavBar';
import UserRoutes from './UserRoutes';
import MainLoader from 'components/MainLoader/MainLoader';

const App = () => {
  const dispatch = useDispatch();
  const isLoadingUser = useSelector(getLoadingUserStatus);

  useEffect(() => {
    dispatch(current());
  }, [dispatch]);

  return (
    <Container>
      {isLoadingUser ? (
        <MainLoader />
      ) : (
        <>
          <Navbar />
          <UserRoutes />
        </>
      )}
    </Container>
  );
};

export default App;
