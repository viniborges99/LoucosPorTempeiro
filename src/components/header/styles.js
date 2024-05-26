import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: #402721;
  position: fixed;
  width: 100%;
  z-index: 2;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  gap: 30px;

  @media (max-width: 768px) {
    justify-content: space-between;
  }
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
    margin: 0 auto;
  }
`;

export const NavBar = styled.nav`
  @media (max-width: 768px) {
    display: none;
  }
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

export const NavLink = styled.a`
  color: #F2E3B3;
  text-decoration: none;
  font-size: 22px;

  &:hover {
    color: #F2B90C;
    font-weight: bold;
  }
`;

export const NavA = styled.a`
  color: #F2E3B3;
  text-decoration: none;
  font-size: 22px;

  &:hover {
    color: #F2B90C;
    font-weight: bold;
  }
`;

export const SideMenuButton = styled.button`
  display: none;
  background-color: transparent;
  border: none;
  color: #F2E3B3;
  font-size: 30px;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const SideMenu = styled.div`
  display: none;
  flex-direction: column;
  align-items: center;
  background-color: #402721;
  position: fixed;
  top: 0;
  left: 0;
  width: 250px;
  height: 100%;
  padding-top: 60px;
  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(-100%)')};
  transition: transform 0.3s ease-in-out;
  z-index: 3;

  @media (max-width: 768px) {
    display: flex;
  }
`;

export const SideNavUl = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 100%;
`;

export const SideNavLi = styled.li`
  margin-bottom: 20px;
  text-align: center;
`;

export const SideNavLink = styled.a`
  color: #F2E3B3;
  text-decoration: none;
  font-size: 22px;
  display: block;

  &:hover {
    color: #F2B90C;
    font-weight: bold;
  }
`;

export const Overlay = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 2;
`;

