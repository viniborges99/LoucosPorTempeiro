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
          <TitleCard>Dry Rub Aves</TitleCard>
          <ImgCard src={RubAves}/>
          <P> Da mesma família do alho, da cebola e do alho-poró, a cebolinha é a base do cheiro verde. A ciboulette é mais usada em sopas, cremes, omeletes e peixes.
            É importante usá-las apenas para finalizar pratos, pois o calor as faz perder sabor.Dica consul: já pensou em dar um gostinho a mais no clássico ovo mexido? Experimente adicionar cebolinha para finalizar.</P>
        </Card>
        <Card>
          <TitleCard>Dry Rub Carnes Vermelhas</TitleCard>
          <ImgCard src={RubCarneVermelha}/>
          <P>Da mesma família do alho, da cebola e do alho-poró, a cebolinha é a base do cheiro verde. A ciboulette é mais usada em sopas, cremes, omeletes e peixes.
          É importante usá-las apenas para finalizar pratos, pois o calor as faz perder sabor.Dica consul: já pensou em dar um gostinho a mais no clássico ovo mexido? Experimente adicionar cebolinha para finalizar.</P>
        </Card>
        <Card>
          <TitleCard>Sal de Parrilla com Noz Moscada</TitleCard>
          <ImgCard src={ParrilhaMoscada}/>
          <P>Da mesma família do alho, da cebola e do alho-poró, a cebolinha é a base do cheiro verde. A ciboulette é mais usada em sopas, cremes, omeletes e peixes.
          É importante usá-las apenas para finalizar pratos, pois o calor as faz perder sabor.Dica consul: já pensou em dar um gostinho a mais no clássico ovo mexido? Experimente adicionar cebolinha para finalizar.</P>
        </Card>
        <Card>
          <TitleCard>Sal de Parrilla com Hortelã e Especiarias</TitleCard>
          <ImgCard src={ParrilhaHortela}/>
          <P>Da mesma família do alho, da cebola e do alho-poró, a cebolinha é a base do cheiro verde. A ciboulette é mais usada em sopas, cremes, omeletes e peixes.
          É importante usá-las apenas para finalizar pratos, pois o calor as faz perder sabor.Dica consul: já pensou em dar um gostinho a mais no clássico ovo mexido? Experimente adicionar cebolinha para finalizar.</P>
        </Card>
        <Card>
          <TitleCard>Sal de Parrilla com Pimenta e Especiarias</TitleCard>
          <ImgCard src={ParrilhaPimenta}/>
          <P>Da mesma família do alho, da cebola e do alho-poró, a cebolinha é a base do cheiro verde. A ciboulette é mais usada em sopas, cremes, omeletes e peixes.
          É importante usá-las apenas para finalizar pratos, pois o calor as faz perder sabor.Dica consul: já pensou em dar um gostinho a mais no clássico ovo mexido? Experimente adicionar cebolinha para finalizar.</P>
        </Card>
        <Card>
          <TitleCard>Sal de Parrilla com chimichurri</TitleCard>
          <ImgCard src={ParrilhaChimichurri}/>
          <P>Da mesma família do alho, da cebola e do alho-poró, a cebolinha é a base do cheiro verde. A ciboulette é mais usada em sopas, cremes, omeletes e peixes.
          É importante usá-las apenas para finalizar pratos, pois o calor as faz perder sabor.Dica consul: já pensou em dar um gostinho a mais no clássico ovo mexido? Experimente adicionar cebolinha para finalizar.</P>
        </Card>
        <Card>
          <TitleCard>Sal de Parrilla</TitleCard>
          <ImgCard src={Parrilha}/>
          <P>Da mesma família do alho, da cebola e do alho-poró, a cebolinha é a base do cheiro verde. A ciboulette é mais usada em sopas, cremes, omeletes e peixes.
          É importante usá-las apenas para finalizar pratos, pois o calor as faz perder sabor.Dica consul: já pensou em dar um gostinho a mais no clássico ovo mexido? Experimente adicionar cebolinha para finalizar.</P>
        </Card>
        <Card>
          <TitleCard>Diversidade em Temperos</TitleCard>
          <ImgCard src={Todos}/>
          <P>Da mesma família do alho, da cebola e do alho-poró, a cebolinha é a base do cheiro verde. A ciboulette é mais usada em sopas, cremes, omeletes e peixes.
          É importante usá-las apenas para finalizar pratos, pois o calor as faz perder sabor.Dica consul: já pensou em dar um gostinho a mais no clássico ovo mexido? Experimente adicionar cebolinha para finalizar.</P>
        </Card>
      </ContainerItens>
      <Footer/>
      
    </ContainerProduct>
  );
}
export default Tempero;
