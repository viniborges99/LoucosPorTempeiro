import React from 'react';
import { Container, P, ContainerSobre, ContainerImg, ContainerSecundario } from './styles';
import Carlos from '../../../assets/carlos-segurando-picanha.png';


function Sobre() {
  return (
    <Container>
      <ContainerSecundario>
        <ContainerSobre>
          <h1> Uma paixão pelo churrasco!!</h1>
          <P>Loucos por Tempero é uma empresa especializada em criar sabores únicos para o seu churrasco. Utilizamos técnicas inovadoras de mistura de sabores, empregando os melhores produtos do mercado, tudo feito artesanalmente.Nossa inspiração surgiu da paixão pelo sabor autêntico do churrasco brasileiro. Atuamos com inovação para diferenciar o seu churrasco do dia a dia.Além disso, somos especializados no desenvolvimento das melhores técnicas de preparo para o seu churrasco. Com uma equipe treinada, organizamos seu evento de forma sofisticada, seja no estilo brasileiro ou no American Barbecue. Oferecemos diversas opções, como Parrilla, fogo de chão e defumação. E para sua conveniência, nossos produtos e temperos já vêm inclusos no pacote.</P>
        </ContainerSobre>
        <ContainerImg>
          <img src={Carlos} alt="" />
        </ContainerImg>
      </ContainerSecundario>

    </Container>
  );
}

export default Sobre;

