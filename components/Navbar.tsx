import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

import logo from "../public/logo.png";

const Navbar = () => {
  return (
    <>
      <NavbarContainerWrapper>
        <NavbarContainer>
          <Link href="/">
            <Image src={logo} alt="Logo Pokemon" width={130} />
          </Link>
          <ListNavbar>
            <Link href="/">
              <ItemsListNavbar>Home</ItemsListNavbar>
            </Link>
            <Link href="/about">
              <ItemsListNavbar>About</ItemsListNavbar>
            </Link>
            <Link href="/contact">
              <ItemsListNavbar>Contact</ItemsListNavbar>
            </Link>
          </ListNavbar>
        </NavbarContainer>
      </NavbarContainerWrapper>
    </>
  );
};

const NavbarContainerWrapper = styled.div`
  background: #414141;
`;

const NavbarContainer = styled.nav`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  user-select: none;
`;
const ListNavbar = styled.ul`
  display: flex;
`;
const ItemsListNavbar = styled.li`
  color: #f6f6f6;
  font-size: 1.3em;
  margin: 0 1rem;
  transition: 0.2s;
  :hover {
    color: #918b8b;
    transform: scale(1.01);
  }
`;

export default Navbar;
