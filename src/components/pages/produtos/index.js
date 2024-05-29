import React from 'react';
import { ContainerProduct,ContainerItens,P,Card,ImgCard,TitleCard,Title} from './styles';
import ProdutoImg from '../../../assets/produtos.jpg';

function Produtos(){
  return(
    <ContainerProduct>
      <Title>Produtos</Title>
      <ContainerItens>
        <Card>
          <TitleCard>Titulo</TitleCard>
          <ImgCard src={ProdutoImg}/>
          <P>Descrição do produto</P>
        </Card>
        <Card>
          <TitleCard>Titulo</TitleCard>
          <ImgCard src={ProdutoImg}/>
          <P>Descrição do produto</P>
        </Card>
        <Card>
          <TitleCard>Titulo</TitleCard>
          <ImgCard src={ProdutoImg}/>
          <P>Descrição do produto</P>
        </Card>
        <Card>
          <TitleCard>Titulo</TitleCard>
          <ImgCard src={ProdutoImg}/>
          <P>Descrição do produto</P>
        </Card>
        <Card>
          <TitleCard>Titulo</TitleCard>
          <ImgCard src={ProdutoImg}/>
          <P>Descrição do produto</P>
        </Card>
        <Card>
          <TitleCard>Titulo</TitleCard>
          <ImgCard src={ProdutoImg}/>
          <P>Descrição do produto</P>
        </Card>
        
      </ContainerItens>
      
    </ContainerProduct>
  );
}
export default Produtos;
