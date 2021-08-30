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

import { useRouter } from "next/router";
import Link from "next/link";

function Nav({ menu, isMenu, setForm, showButton }) {
  const { pathname } = useRouter();

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
        <Wrapper menu={menu} className={`${pathname === "/" || "sm"}`}>
          {pathname === "/" ? (
            <NavList menu={menu}>
              <NavLink href="#help">We can help!</NavLink>
              <NavLink href="#about">About</NavLink>
              <NavLink href="#start">How to start</NavLink>
              <NavLink href="#projects">Projects</NavLink>
              <NavLink href="#contact">Contacts</NavLink>
            </NavList>
          ) : (
            <NavList menu={menu}>
              <Link href="/">
                <NavLink className="sm" as="button">
                  Back to homepage
                </NavLink>
              </Link>
              <Link href="#projects">
                <NavLink className="sm" as="button">
                  Students’ projects
                </NavLink>
              </Link>
            </NavList>
          )}
          <Button
            type="button"
            aria-label="button"
            menu={menu}
            show={showButton}
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
