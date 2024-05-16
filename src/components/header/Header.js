import React from 'react';
import {HeaderContainer,Container,Logo, NavBar,NavLi,NavLink,NavUl, NavA} from './styles';
import {Link} from 'react-router-dom';



function Header() {
  const numeroWhatsApp = '5519998301882'; // Número de telefone para o WhatsApp
  const mensagem = 'Olá nos da equipe loucos por temperos ficamos muito felizes em telo(a) por aqui, o que podemos fazer por voce hoje?';
  const linkWhatsApp = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${encodeURIComponent(mensagem)}`;
  return (
    <HeaderContainer>
      <Container>
        <Logo>
          Loucos por Tempeiro
        </Logo>
        <NavBar>
          <NavUl>
            <NavLi>
              <NavLink as={Link} to="/evento">Eventos</NavLink>
            </NavLi>
            <NavLi>
              <NavLink as={Link} to="/porcoes">Porções</NavLink>
            </NavLi>
            <NavLi>
              <NavLink as={Link} to="/temperos">Temperos</NavLink>
            </NavLi>
            <NavLi>
              <NavA href={linkWhatsApp} target="_blank" rel="noopener noreferrer">Contato</NavA>
            </NavLi>
          </NavUl>
        </NavBar>
      </Container>
    </HeaderContainer>
  );
}

export default Header;



