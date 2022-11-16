import {
  NavBarAuth,
  Link,
} from 'components/Navbar/NavbarAuth/NavbarAuthStyled';

const NavbarAuth = () => { 

  return (
    <NavBarAuth>
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
    </NavBarAuth>
  );
};

export default NavbarAuth;