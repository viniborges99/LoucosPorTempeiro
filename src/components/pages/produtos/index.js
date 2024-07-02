import React from 'react';
import { ContainerProduct,ContainerItens,P,Card,ImgCard,TitleCard,Title} from './styles';
import todosTemperos from '../../../assets/varios-tempeiros.jpg';
import Defumação from '../../../assets/carlos-defumação.jpg';
import churrasco from '../../../assets/churrasco-parrilha.jpg';
import MesaEvento from '../../../assets/mesa-evento.jpg';

function Produtos(){
  return(
    <ContainerProduct>
      <Title>Produtos</Title>
      <ContainerItens>
        <Card>
          <TitleCard>Temperos</TitleCard>
          <ImgCard src={todosTemperos}/>
          <P>Os melhores temperos para churrasco</P>
        </Card>
        <Card>
          <TitleCard>Defumação</TitleCard>
          <ImgCard src={Defumação}/>
          <P>Defumação de carnes</P>
        </Card>
        <Card>
          <TitleCard>Churrasco</TitleCard>
          <ImgCard src={churrasco}/>
          <P>Churrasco na parrilla</P>
        </Card>
        <Card>
          <TitleCard>Eventos</TitleCard>
          <ImgCard src={MesaEvento}/>
          <P>O mais alto padrão da gastronomia para seu evento</P>
        </Card>
        
        
      </ContainerItens>
      
    </ContainerProduct>
  );
}
export default Produtos;
