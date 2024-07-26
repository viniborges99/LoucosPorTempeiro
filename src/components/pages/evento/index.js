import React from 'react';
import { Container, P, ContainerSobre, ContainerImg, ContainerSecundario, ContainerEventos, ContainerItens, Card, ImgCard, Descrição } from './styles';

import Header from '../../header/Header';
//import Costela from '../../../assets/carne.jpg';
import Footer from '../footer';
import VideoFile1 from '../../../assets/video-evento.mp4';
import friosEvento from '../../../assets/frios-evento.jpg';
import mesaEvento from '../../../assets/mesa-evento.jpg';
import carneEvento from '../../../assets/churrasco-parrilha.jpg';
import Arado from '../../../assets/arado.jpg';
import CostelaChao from '../../../assets/costela-chão.jpg';
import VideoFile2 from '../../../assets/video-costela.mp4';

function Evento() {
  return (
    <>
      <Container>
        <Header />
        <ContainerSecundario>
          <ContainerSobre>
            <h1>Um pouco sobre nossos eventos</h1>
            <P>Loucos por Tempero é uma empresa especializada em criar sabores únicos para o seu churrasco. Utilizamos técnicas inovadoras de mistura de sabores, empregando os melhores produtos do mercado, tudo feito artesanalmente.Nossa inspiração surgiu da paixão pelo sabor autêntico do churrasco brasileiro. Atuamos com inovação para diferenciar o seu churrasco do dia a dia.Além disso, somos especializados no desenvolvimento das melhores técnicas de preparo para o seu churrasco. Com uma equipe treinada, organizamos seu evento de forma sofisticada, seja no estilo brasileiro ou no American Barbecue.Oferecemos diversas opções, como Parrilla, fogo de chão e defumação. E para sua conveniência, nossos produtos e temperos já vêm inclusos no pacote.</P>
          </ContainerSobre>
          <ContainerImg>
            <video autoPlay muted loop playsInline>
              <source src={VideoFile1} type="video/mp4" />
            </video>
          </ContainerImg>
        </ContainerSecundario>
      </Container>

      <ContainerEventos>
        <ContainerItens>
          <Card>
            <ImgCard src={friosEvento} />
            <Descrição>Tabua de frios</Descrição>
          </Card>
          <Card>
            <ImgCard src={mesaEvento} />
            <Descrição>Mesa de frios</Descrição>
          </Card>
          <Card>
            <ImgCard src={carneEvento} />
            <Descrição>Churrasco na parrilla</Descrição>
          </Card>
          <Card>
            <ImgCard src={Arado} />
            <Descrição>Arroz no arado</Descrição>
          </Card>
          <Card>
            <ImgCard src={CostelaChao} />
            <Descrição>Costela de chão</Descrição>
          </Card>
          <Card>
            <video autoPlay muted loop playsInline>
              <source src={VideoFile2} type="video/mp4" />
            </video>
          </Card>

        </ContainerItens>
      </ContainerEventos>
      <Footer />
    </>
  );
}

export default Evento;
