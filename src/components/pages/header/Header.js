import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  HeaderContainer, Container, Logo, NavBar, NavUl, NavLi, NavLink, NavA,
  SideMenuButton, SideMenu, SideNavUl, SideNavLi, SideNavLink, Overlay
} from './styles';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const numeroWhatsApp = '5519982409589';

  const linkWhatsApp = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}`;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <HeaderContainer>
        <Container>
          <Logo>
            <NavLink as={Link} to="/">Loucos por Tempero</NavLink>
          </Logo>
          <NavBar>
            <NavUl>
              <NavLi>
                <NavLink as={Link} to="/">Sobre</NavLink>
              </NavLi>
              <NavLi>
                <NavLink as={Link} to="/Evento">Eventos</NavLink>
              </NavLi>
              <NavLi>
                <NavLink as={Link} to="/Temperos">Temperos</NavLink>
              </NavLi>
              <NavLi>
                <NavA href={linkWhatsApp} target="_blank" rel="noopener noreferrer">Contato</NavA>
              </NavLi>
            </NavUl>
          </NavBar>
          <SideMenuButton onClick={toggleMenu}>&#9776;</SideMenuButton>
        </Container>
      </HeaderContainer>
      <SideMenu isOpen={isOpen}>
        <SideNavUl>
          <SideNavLi>
            <SideNavLink as={Link} to="/" onClick={closeMenu}>Sobre</SideNavLink>
          </SideNavLi>
          <SideNavLi>
            <SideNavLink as={Link} to="/Evento" onClick={closeMenu}>Eventos</SideNavLink>
          </SideNavLi>
          <SideNavLi>
            <SideNavLink as={Link} to="/Temperos" onClick={closeMenu}>Temperos</SideNavLink>
          </SideNavLi>
          <SideNavLi>
            <SideNavLink as="a" href={linkWhatsApp} target="_blank" rel="noopener noreferrer" onClick={closeMenu}>Contato</SideNavLink>
          </SideNavLi>
        </SideNavUl>
      </SideMenu>
      <Overlay isOpen={isOpen} onClick={closeMenu} />
    </>
  );
}

export default Header;







