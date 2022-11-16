import { Link, StyledUl } from 'components/Navbar/NavbarMenu/NavBarMenuStyled';
import items from 'components/Navbar/NavbarMenu/items';

const NavbarMenu = () => {
  const elements = items.map(({ id, to, text }) => (
    <li key={id}>
      <Link to={to}>{text}</Link>
    </li>
  ));

  return <StyledUl>{elements}</StyledUl>;
};

export default NavbarMenu;