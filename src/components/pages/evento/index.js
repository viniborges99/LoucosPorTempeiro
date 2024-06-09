import React from 'react';
import { Container, P, ContainerSobre, ContainerImg, ContainerSecundario, ContainerEventos, ContainerItens, Card, ImgCard, Descrição } from './styles';
//import churrasqueiro from '../../../assets/pessoa-churrasco.jpg';
import Header from '../../header/Header';
import Costela from '../../../assets/carne.jpg';
import Footer from '../footer';

function Evento() {
  return (
    <>
      <Container>
        <Header />
        <ContainerSecundario>
          <ContainerSobre>
            <h1>Um pouco sobre nossos eventos</h1>
            <P>Com o uso inteligente das ferramentas como a programação, design de interfaces e análise de dados, é possível não apenas dar vida a ideias, mas também moldar o futuro digital de maneira significativa. O segredo está em entender as necessidades do mercado, identificar oportunidades e, acima de tudo, estar disposto a experimentar e aprender com os desafios. Com o uso inteligente das ferramentas como a programação, design de interfaces e análise de dados, é possível não apenas dar vida a ideias, mas também moldar o futuro digital de maneira significativa. O segredo está em entender as necessidades do mercado, identificar oportunidades e, acima de tudo, estar disposto a experimentar e aprender com os desafios. Com o uso inteligente das ferramentas como a programação, design de interfaces e análise de dados, é possível não apenas dar vida a ideias, mas também moldar o futuro digital de maneira significativa. O segredo está em entender as necessidades do mercado, identificar oportunidades e, acima de tudo, estar disposto a experimentar e aprender com os desafios.</P>
          </ContainerSobre>
          <ContainerImg>
            <img src={Costela} alt="Evento" />
          </ContainerImg>
        </ContainerSecundario>
      </Container>

      <ContainerEventos>
        <ContainerItens>
          <Card>
            <ImgCard src={Costela} />
            <Descrição>Descrição do produto</Descrição>
          </Card>
          <Card>
            <ImgCard src={Costela} />
            <Descrição>Descrição do produto</Descrição>
          </Card>
          <Card>
            <ImgCard src={Costela} />
            <Descrição>Descrição do produto</Descrição>
          </Card>
          <Card>
            <ImgCard src={Costela} />
            <Descrição>Descrição do produto</Descrição>
          </Card>
          <Card>
            <ImgCard src={Costela} />
            <Descrição>Descrição do produto</Descrição>
          </Card>
          <Card>
            <ImgCard src={Costela} />
            <Descrição>Descrição do produto</Descrição>
          </Card>
          <Card>
            <ImgCard src={Costela} />
            <Descrição>Descrição do produto</Descrição>
          </Card>
          <Card>
            <ImgCard src={Costela} />
            <Descrição>Descrição do produto</Descrição>
          </Card>
          <Card>
            <ImgCard src={Costela} />
            <Descrição>Descrição do produto</Descrição>
          </Card>
        </ContainerItens>
      </ContainerEventos>
      <Footer />
    </>
  );
}

export default Evento;
