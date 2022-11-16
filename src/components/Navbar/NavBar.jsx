import NavbarMenu from 'components/Navbar/NavbarMenu/NavbarMenu';
import NavbarAuth from 'components/Navbar/NavbarAuth/NavbarAuth';
import NavbarUser from 'components/Navbar/NavbarUser/NavbarUser';

import useAuth from 'hooks/useAuth';
import { NavBarStyledDiv, Link } from 'components/Navbar/NavBarStyled';

export const Navbar = () => {
  const isLogin = useAuth();

  return (
    <NavBarStyledDiv>
      <Link to="/">Home</Link>
      {isLogin && <NavbarMenu />}
      {isLogin ? <NavbarUser /> : <NavbarAuth />}
    </NavBarStyledDiv>
  );
};


