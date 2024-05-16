import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: #402721;
  position: fixed;
  width: 100%;
  z-index: 1;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
  gap: 30px;
`;

export const Logo = styled.h2`
  color: #F2E3B3;
  font-weight: bold;
  font-size: 22px;
  line-height: 19px;
  span {
    font-size: 40px;
    font-weight: 600;
    line-height: 19px;
  }
  @media (max-width: 600px) {
    display: none;
  }
`;
export const NavBar = styled.nav`

  
`;
export const NavUl = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  
`;

export const NavLi = styled.li`
  margin-right: 20px;
`;

export const NavLink = styled.link`
  color: #F2E3B3;
  text-decoration: none;
  font-size: 22px;
  ;
  &:hover {
    color: #F2B90C;
    font-weight:bold;
  }
`;
export const NavA = styled.a`
color: #F2E3B3;
  text-decoration: none;
  font-size: 22px;
  ;
  &:hover {
    color: #F2B90C;
    font-weight:bold;
  }
`;
