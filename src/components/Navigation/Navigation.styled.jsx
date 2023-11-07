import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavigationStyled = styled.nav`
  padding-left: 10px;
  padding-right: 10px;
`;

export const NavigationWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
  justify-content: center;
`;

export const Link = styled(NavLink)`
  padding: 12px 20px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-size: 16px;
  font-weight: 500;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  :focus {
    color: #fff;
    background-color: #3470ff;
  }

  &.active {
    color: #fff;
    background-color: #0b44cd;
  }

  @media (min-width: 520px) {
    padding: 12px 50px;
  }
`;
