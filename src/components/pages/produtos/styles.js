import styled from 'styled-components';

export const ContainerProduct = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #402721;
  
`;

export const ContainerItens = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px; 
  margin-bottom:50px;
`;
export const Title = styled.p`
  width: 100%;
  text-align: center;
  padding: 20px;
  margin-bottom: 30px;
  font-weight: 800;
  font-size: 2rem;
  background: #402721;
  color: #F2E3B3;
  border-bottom: 2px solid white;

  `;
export const P = styled.p`
    font-size: 1rem;
    margin: 8px 0;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 16px; 
  background-color: white;
  border-radius: 8px; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
  margin: 0 auto;
`;

export const TitleCard = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 8px;
`;

export const ImgCard = styled.img`
  width: 100%;
  height: auto;
  border-radius: 4px; /* Slight rounding of image corners */
  object-fit: cover; /* Ensures the image covers the area */
`;



//montar os cardes, baixar imagens pro card usar o display grid 
