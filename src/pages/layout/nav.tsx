import React from 'react';
import styled from 'styled-components';
import { Link, useHistory, useLocation } from 'react-router-dom';
import Search from 'components/search';

const Header = styled.header`
  padding: 1rem 2rem 1.5rem;
  z-index: 1;

  @media screen and (min-width: 769px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem;
  }

  @media screen and (min-width: 1200px) {
    padding: 1.5rem 6rem;
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
  &:not(:last-child) {
    margin-right: 2.4rem;
  }
`;

const StyledLink = styled(Link)`
  position: relative;
  display: block;
  height: 2rem;
  font-weight: 500;
  line-height: 2rem;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: ${({ selected }: { selected: boolean }) =>
      selected ? '100%' : '0'};
    height: 3px;
    background: white;
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
          <Link to="/movies/popular">MOTV</Link>
        </Logo>
        <Navbar>
          <Navlist>
            <NavItem>
              <StyledLink
                to="/movies/popular"
                selected={
                  pathname.includes('/movies') || pathname.includes('/movie')
                }
              >
                MOVIE
              </StyledLink>
            </NavItem>
            <NavItem>
              <StyledLink
                to="/tvs/airing_today"
                selected={pathname.includes('/tvs') || pathname.includes('/tv')}
              >
                TV SHOWS
              </StyledLink>
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
