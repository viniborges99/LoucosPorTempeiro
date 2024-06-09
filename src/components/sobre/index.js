import React from 'react';
import { Container,P,ContainerSobre, ContainerImg,ContainerSecundario } from './styles';
import Carlos from '../../assets/img-media.jpg';


function Sobre() {
  return (
    <Container>
      <ContainerSecundario>
        <ContainerSobre>
          <h1> Uma paixão pelo churrasco!!</h1>
          <P>Com o uso inteligente das ferramentas como a programação, design de interfaces e análise de dados, é possível não apenas dar vida a ideias, mas também moldar o futuro digital de maneira significativa. O segredo está em entender as necessidades do mercado, identificar oportunidades e, acima de tudo, estar disposto a experimentar e aprender com os desafios, Com o uso inteligente das ferramentas como a programação, design de interfaces e análise de dados, é possível não apenas dar vida a ideias, mas também moldar o futuro digital de maneira significativa. O segredo está em entender as necessidades do mercado, identificar oportunidades e, acima de tudo, estar disposto a experimentar e aprender com os desafios, Com o uso inteligente das ferramentas como a programação, design de interfaces e análise de dados, é possível não apenas dar vida a ideias, mas também moldar o futuro digital de maneira significativa. O segredo está em entender as necessidades do mercado, identificar oportunidades e, acima de tudo, estar disposto a experimentar e aprender com os desafios</P>
        </ContainerSobre>
        <ContainerImg>
          <img src={Carlos} alt=""/>
        </ContainerImg>
      </ContainerSecundario>

    </Container>
  );
}

export default Sobre;

