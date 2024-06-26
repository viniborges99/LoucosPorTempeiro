import React from 'react';
import { ContainerProduct,ContainerItens,P,Card,ImgCard,TitleCard,Title} from './styles';
import RubAves from '../../../assets/tempeiro-dry-rub-aves.jpg';
import RubCarneVermelha from '../../../assets/tempero-dry-rub-carnes-vermelhas.jpg';
import ParrilhaMoscada from '../../../assets/tempeiro-sal-de-parrilha-noz-moscada.jpg';
import ParrilhaHortela from '../../../assets/tempero-sal-de-parrilha-com-hortela.jpg';
import ParrilhaPimenta from '../../../assets/tempero-sal-de-parrilha-com-pimenta.jpg';
import ParrilhaChimichurri from '../../../assets/tempero-sal-parrilha-chimichurri.jpg';
import Parrilha from '../../../assets/tempero-sal-parrilha.jpg';
import Todos from '../../../assets/varios-tempeiros.jpg';
import Header from '../../header/Header';
import Footer from '../footer';

function Tempero (){
  return(
    <ContainerProduct>
      <Header/>
      <Title>Temperos</Title>
      <ContainerItens>
        <Card>
          <TitleCard>Titulo</TitleCard>
          <ImgCard src={RubAves}/>
          <P>Descrição do produto</P>
        </Card>
        <Card>
          <TitleCard>Titulo</TitleCard>
          <ImgCard src={RubCarneVermelha}/>
          <P>Descrição do produto</P>
        </Card>
        <Card>
          <TitleCard>Titulo</TitleCard>
          <ImgCard src={ParrilhaMoscada}/>
          <P>Descrição do produto</P>
        </Card>
        <Card>
          <TitleCard>Titulo</TitleCard>
          <ImgCard src={ParrilhaHortela}/>
          <P>Descrição do produto</P>
        </Card>
        <Card>
          <TitleCard>Titulo</TitleCard>
          <ImgCard src={ParrilhaPimenta}/>
          <P>Descrição do produto</P>
        </Card>
        <Card>
          <TitleCard>Titulo</TitleCard>
          <ImgCard src={ParrilhaChimichurri}/>
          <P>Descrição do produto</P>
        </Card>
        <Card>
          <TitleCard>Titulo</TitleCard>
          <ImgCard src={Parrilha}/>
          <P>Descrição do produto</P>
        </Card>
        <Card>
          <TitleCard>Titulo</TitleCard>
          <ImgCard src={Todos}/>
          <P>Descrição do produto</P>
        </Card>
      </ContainerItens>
      <Footer/>
      
    </ContainerProduct>
  );
}
export default Tempero;
