import React from 'react';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';
import Search from 'components/search';

const Header = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  width: 100%;
  height: 4rem;
  padding: 2rem;
`;

const Logo = styled.h1`
  font-size: 2.5rem;
  margin-right: 2rem;
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

const Nav = () => {
  const history = useHistory();

  const searchByTerm = (term: string) => {
    history.push(`/search/${term}`);
  };

  return (
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
        </Navlist>
      </Navbar>
      <Search searchByTerm={searchByTerm} />
    </Header>
  );
};

export default Nav;
