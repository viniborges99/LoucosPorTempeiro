import React from 'react';
import { ContainerProduct,ContainerItens,P,Card,ImgCard,TitleCard,Title} from './styles';
import Tempeiro from '../../../assets/tempeiro.jpg';

function Produtos(){
  return(
    <ContainerProduct>
      <Title>Produtos</Title>
      <ContainerItens>
        <Card>
          <TitleCard>titulo</TitleCard>
          <ImgCard src={Tempeiro}/>
          <P>Descrição do produto</P>
        </Card>
        <Card>
          <TitleCard>titulo</TitleCard>
          <ImgCard src={Tempeiro}/>
          <P>Descrição do produto</P>
        </Card>
        <Card>
          <TitleCard>titulo</TitleCard>
          <ImgCard src={Tempeiro}/>
          <P>Descrição do produto</P>
        </Card>
        <Card>
          <TitleCard>titulo</TitleCard>
          <ImgCard src={Tempeiro}/>
          <P>Descrição do produto</P>
        </Card>
        <Card>
          <TitleCard>titulo</TitleCard>
          <ImgCard src={Tempeiro}/>
          <P>Descrição do produto</P>
        </Card>
        <Card>
          <TitleCard>titulo</TitleCard>
          <ImgCard src={Tempeiro}/>
          <P>Descrição do produto</P>
        </Card>
        
      </ContainerItens>
      
    </ContainerProduct>
  );
}
export default Produtos;
