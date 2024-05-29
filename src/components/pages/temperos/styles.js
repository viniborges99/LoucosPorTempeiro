import styled from 'styled-components';


export const ContainerProduct = styled.div`
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #402721;
`;

export const ContainerItens = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px; 
  margin-bottom: 50px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Title = styled.p`
  width: 100%;
  text-align: center;
  padding: 40px;
  margin: 50px 0;
  font-weight: 800;
  font-size: 3rem;
  background: #F2E3B3;
  color: #402721;
  border-bottom: 2px solid white;
  letter-spacing: 10px;

  @media (max-width: 768px) {
    font-size: 2rem;
    padding: 15px;
    letter-spacing: 5px;
    margin: 30px 0;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
    padding: 10px;
    letter-spacing: 3px;
    margin: 20px 0;
  }
`;

export const P = styled.p`
  font-size: 1rem;
  margin: 8px 0;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
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

  @media (max-width: 768px) {
    padding: 12px;
  }

  @media (max-width: 480px) {
    padding: 8px;
  }
`;

export const TitleCard = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 8px;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const ImgCard = styled.img`
  width: 100%;
  height: auto;
  border-radius: 4px; 
  object-fit: cover;
`;



