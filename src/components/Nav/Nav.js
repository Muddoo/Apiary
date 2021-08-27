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

function Nav({ menu, isMenu, setForm }) {
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
            <NavLink href="#help">We can help!</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#start">How to start</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#contact">Contacts</NavLink>
          </NavList>
          <Button
            type="button"
            aria-label="button"
            menu={menu}
            onClick={() => setForm(true)}
          >
            Delegate a task
          </Button>
        </Wrapper>
      </Navbar>
    </NavContainer>
  );
}

export default Nav;
