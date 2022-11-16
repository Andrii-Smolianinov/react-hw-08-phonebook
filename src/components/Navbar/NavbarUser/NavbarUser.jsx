import { useDispatch, useSelector } from "react-redux";
import { logout } from 'redux/auth/authOperations';
import { getUser } from 'redux/auth/authSelectors';
import { MdOutlineLogout } from 'react-icons/md';

import { NavBarUserStyledDiv } from 'components/Navbar/NavbarUser/NavBarUserStyledDiv' 

export default function NavbarUser() {
  const dispatch = useDispatch();
  const { name } = useSelector(getUser)

  const onLogout = () => {
    dispatch(logout());
  }

  return (
    <NavBarUserStyledDiv>                 
      <button onClick={onLogout}>{name}<MdOutlineLogout /></button>
    </NavBarUserStyledDiv>
  );
}
 