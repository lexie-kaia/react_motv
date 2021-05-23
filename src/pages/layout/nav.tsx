import React from 'react';
import styled from 'styled-components';
import { Link, useHistory, useLocation } from 'react-router-dom';
import Search from 'components/search';

const Header = styled.header`
  padding: 1rem 2rem;

  @media screen and (min-width: 769px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;
  }

  @media screen and (min-width: 1200px) {
    padding: 2rem 6rem;
  }
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;

  @media screen and (min-width: 769px) {
    margin-bottom: 0;
  }
`;

const SearchContainer = styled.div``;

const Logo = styled.h1`
  font-size: 2rem;
  margin-right: 3.6rem;
  font-family: 'Racing Sans One', cursive;
`;

const Navbar = styled.nav``;

const Navlist = styled.ul`
  display: flex;
  justify-content: center;
`;

const NavItem = styled.li`
  position: relative;

  height: 2rem;
  font-weight: 500;
  line-height: 2rem;

  &:not(:last-child) {
    margin-right: 2.4rem;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: ${({ selected }: { selected: boolean }) =>
      selected ? '100%' : '0'};
    height: 2px;
    background: #212121;
    transition: width 200ms ease-out;
  }
`;

const Nav = () => {
  const history = useHistory();
  const { pathname } = useLocation();

  const searchByTerm = (term: string) => {
    history.push(`/search/${term}`);
  };

  return (
    <Header>
      <NavContainer>
        <Logo>
          <Link to="/movie">MOTV</Link>
        </Logo>
        <Navbar>
          <Navlist>
            <NavItem selected={pathname === '/movie'}>
              <Link to="/movie">MOVIE</Link>
            </NavItem>
            <NavItem selected={pathname === '/tv'}>
              <Link to="/tv">TV SHOWS</Link>
            </NavItem>
          </Navlist>
        </Navbar>
      </NavContainer>
      <SearchContainer>
        <Search searchByTerm={searchByTerm} />
      </SearchContainer>
    </Header>
  );
};

export default Nav;
