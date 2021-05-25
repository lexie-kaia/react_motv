import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const Nav = styled.nav``;

const NavList = styled.ul`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  padding: 1.5rem 0;
`;

const NavItem = styled.li``;

const StyledLink = styled(Link)`
  position: relative;
  display: block;
  margin: 0 1rem;
  height: 2rem;
  font-weight: 500;
  line-height: 2rem;
  text-transform: uppercase;

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

  @media screen and (min-width: 769px) {
    margin: 0 1.5rem;
  }
`;

type Props = {
  navList: { name: string; pathname: string }[];
  pathname: string;
};

const SectionNav = ({ navList, pathname }: Props) => {
  return (
    <Nav>
      <NavList>
        {navList.map((navItem) => (
          <NavItem key={navItem.name}>
            <StyledLink
              to={navItem.pathname}
              selected={navItem.pathname === pathname}
            >
              {navItem.name}
            </StyledLink>
          </NavItem>
        ))}
      </NavList>
    </Nav>
  );
};

export default SectionNav;
