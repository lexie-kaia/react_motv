import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Header = styled.header`
  display: flex;
  align-items: center;
  height: 4rem;
  padding: 2rem;
`;

const Logo = styled.h1`
  font-size: 2.5rem;
  margin-right: 1.5rem;
`;

const Navbar = styled.nav``;

const Navlist = styled.ul`
  display: flex;
  justify-content: center;
`;

const NavItem = styled.li`
  padding: 1rem;
  font-weight: 500;
`;

const Nav = () => (
  <Header>
    <Logo>MOTV</Logo>
    <Navbar>
      <Navlist>
        <NavItem>
          <Link to="/">MOVIE</Link>
        </NavItem>
        <NavItem>
          <Link to="/tv">TV</Link>
        </NavItem>
        <NavItem>
          <Link to="/search">SEARCH</Link>
        </NavItem>
        <NavItem>
          <Link to="/detail">DETAIL</Link>
        </NavItem>
      </Navlist>
    </Navbar>
  </Header>
);

export default Nav;
