import React from 'react';
import { ContainerProduct, ContainerItens, P, Card, ImgCard, TitleCard, Title } from './styles';
import RubAves from '../../../assets/tempeiro-dry-rub-aves.jpg';
import RubCarneVermelha from '../../../assets/tempero-dry-rub-carnes-vermelhas.jpg';
import ParrilhaMoscada from '../../../assets/tempeiro-sal-de-parrilha-noz-moscada.jpg';
import ParrilhaHortela from '../../../assets/tempero-sal-de-parrilha-com-hortela.jpg';
import ParrilhaPimenta from '../../../assets/tempero-sal-de-parrilha-com-pimenta.jpg';
import ParrilhaChimichurri from '../../../assets/tempero-sal-parrilha-chimichurri.jpg';
import Parrilha from '../../../assets/tempero-sal-parrilha.jpg';
import Todos from '../../../assets/varios-tempeiros.jpg';
import Header from '../header/Header';
import Footer from '../footer';

function Tempero() {
  return (
    <ContainerProduct>
      <Header />
      <Title>Temperos</Title>
      <ContainerItens>
        <Card>
          <TitleCard>Dry Rub Aves</TitleCard>
          <ImgCard src={RubAves} />
          <P> É uma mistura de condimentos secos que é aplicada para dar sabor às carnes antes de irem para o forno, grelha ou churrasqueira. É muito comum nos churrascos norte americano. • exterior da carne terá uma camada mais forte e intensa, com uma camada coloração bem caramelizada, isso se da pela presença do açúcar mascavo presente na receita.o ao azeite e colocar em suas saladas de folhas.</P>
        </Card>
        <Card>
          <TitleCard>Dry Rub Carnes Vermelhas</TitleCard>
          <ImgCard src={RubCarneVermelha} />
          <P>É uma mistura de temperos e erva: seca com a finalidade de temperar as carnes bovinas, potencializando sabor e formando uma crosta na carne retendo o seu suco. A aplicação do Dry Rub é feita na carne antes dela ser defumada, grelhada ou assada.
            Contém Pimenta do Reino.ode misturá-lo ao azeite e colocar em suas saladas de folhas.</P>
        </Card>
        <Card>
          <TitleCard>Sal de Parrilla com Noz Moscada</TitleCard>
          <ImgCard src={ParrilhaMoscada} />
          <P>Essa mistura é um ótimo tempero para saladas e grelhados.
            Experimente temperar um filé de sua preferência com este sal e um pouco de limão e veja seu sabor realçar. Você também pode mistur lo ao azeite e colocar em suas saladas de folhas</P>
        </Card>
        <Card>
          <TitleCard>Sal de Parrilla com Hortelã e Especiarias</TitleCard>
          <ImgCard src={ParrilhaHortela} />
          <P>Criado com base de ervas com uma mistura de especiarias.
            Pode ser usado nos cortes: bovinos, suínos, equínos e cordeiros</P>
        </Card>
        <Card>
          <TitleCard>Sal de Parrilla com Pimenta e Especiarias</TitleCard>
          <ImgCard src={ParrilhaPimenta} />
          <P>Feito a base de pimentas calabresa em flocos, cebola e especiarias. Recomendado para todos os tipos de cortes dando um leve toque picante à sua carne. usado nos cortes: bovinos, suínos, equínos e cordeiros.</P>
        </Card>
        <Card>
          <TitleCard>Sal de Parrilla com chimichurri</TitleCard>
          <ImgCard src={ParrilhaChimichurri} />
          <P>Essa mistura é um ótimo tempero para saladas e grelhados.
            Experimente temperar um filé de sua preferência com este sal e um pouco de limão e veja seu sabor realçar. Você também pode misturá-lo ao azeite e colocar em suas saladas de folhas.</P>
        </Card>
        <Card>
          <TitleCard>Sal de Parrilla</TitleCard>
          <ImgCard src={Parrilha} />
          <P>Este tempero feito à base de salsa, pimenta vermelha e alho é tipicamente Argentino e indispensável em qualquer churrasco que se preze.
            Ingredientes: Alho, salsa, pimentão vermelho, orégano e pimenta do reino branca.</P>
        </Card>
        <Card>
          <TitleCard>Diversidade em Temperos</TitleCard>
          <ImgCard src={Todos} />
          <P>Todos os nossos temperos são preparados com muito carinho e feitos de maneira totalmente artesanal, dando aquele sabor inesquecível à sua comida. Nossos temperos, além de dar sabor às suas refeições, também contribuem para a melhora da sua saúde, reduzindo o risco de doenças, ajudando no controle do açúcar, melhorando a digestão e combatendo o estresse.</P>
        </Card>
      </ContainerItens>
      <Footer />

    </ContainerProduct>
  );
}
export default Tempero;
