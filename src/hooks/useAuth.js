import { useSelector } from 'react-redux';
import { getIsLogin } from 'redux/auth/authSelectors';

const useAuth = () => {
  const result = useSelector(getIsLogin);
  return result;
};
export default useAuth;
