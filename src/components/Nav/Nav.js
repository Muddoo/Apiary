import {
  NavContainer,
  Navbar,
  Logo,
  Icon,
  Wrapper,
  NavList,
  NavLink,
  Button,
} from "./Nav.styles";

function Nav({menu, isMenu}) {
  return (
    <NavContainer>
      <Navbar>
        <Logo />
        <Icon
          type="button"
          aria-label="toggle-menu"
          menu={menu}
          onClick={() => isMenu(!menu)}
        />
        <Wrapper menu={menu}>
          <NavList menu={menu}>
            <NavLink href="#">We can help!</NavLink>
            <NavLink href="#">About</NavLink>
            <NavLink href="#">How to start</NavLink>
            <NavLink href="#">Projects</NavLink>
            <NavLink href="#">Contacts</NavLink>
          </NavList>
          <Button menu={menu} type="button" aria-label="button">
            Delegate a task
          </Button>
        </Wrapper>
      </Navbar>
    </NavContainer>
  );
}

export default Nav;
