import React from 'react';
import { ContainerProduct,ContainerItens,P,Card,ImgCard,TitleCard,Title} from './styles';
import Tempeiro from '../../../assets/temperos.jpg';
import Header from '../../header/Header';
import Footer from '../footer';

function Tempero (){
  return(
    <ContainerProduct>
      <Header/>
      <Title>Tempeiros</Title>
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
      <Footer/>
      
    </ContainerProduct>
  );
}
export default Tempero;
