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
import { useState } from "react";

function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <NavContainer>
      <Navbar>
        <Logo />
        <Icon
          type="button"
          aria-label="toggle-menu"
          open={open}
          onClick={() => setOpen(!open)}
        />
        <Wrapper open={open}>
          <NavList open={open}>
            <NavLink href="#">We can help!</NavLink>
            <NavLink href="#">About</NavLink>
            <NavLink href="#">How to start</NavLink>
            <NavLink href="#">Projects</NavLink>
            <NavLink href="#">Contacts</NavLink>
          </NavList>
          <Button open={open} type="button" aria-label="button">
            Delegate a task
          </Button>
        </Wrapper>
      </Navbar>
    </NavContainer>
  );
}

export default Nav;
