import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav``;

const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  max-width: 28rem;
  margin: 0 auto;
  padding: 1.5rem 2rem 0rem;
`;

const NavItem = styled.li``;

const StyledLink = styled(Link)`
  position: relative;
  display: block;
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
