import React from 'react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { FooterContainer, IconLink } from './styles';
const numeroWhatsApp = '5519982409589';
const mensagem = 'Olá nos da equipe loucos por temperos ficamos muito felizes em tê-lo(a) por aqui, o que podemos fazer por voce hoje?';
const linkWhatsApp = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${encodeURIComponent(mensagem)}`;

function Footer() {
  return (
    <FooterContainer>
      <IconLink href="https://www.instagram.com/loucosportemperosechurrasco?igsh=MWI1aTFpcWNlMGw1NA==" target="_blank" rel="noopener noreferrer">
        <FaInstagram />
      </IconLink>
      <IconLink href={linkWhatsApp} target="_blank" rel="noopener noreferrer">
        <FaWhatsapp />
      </IconLink>
      <p>&copy; 2022 - Todos os direitos reservados</p>
    </FooterContainer>
  );
}

export default Footer;
//colocar o link do instagran do loucos
