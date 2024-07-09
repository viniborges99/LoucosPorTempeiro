import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  background-color: #F2E3B3;
  flex-direction: column;
  
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const ContainerSecundario = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 90vw;
  align-items: center;
  margin: 0 auto;

  @media (min-width: 480px) {
    flex-direction: row;
    width: 85vw;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    width: 80vw;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    width: 75vw;
  }

  @media (min-width: 1200px) {
    flex-direction: row;
    width: 70vw;
  }
`;


export const ContainerSobre = styled.div`
  width: 90%;
  text-align: justify;
  margin-bottom: 30px;

  h1 {
    font-size: 2rem;
    color: #0D0D0D;
    text-align: center;
    margin-top: 80px;
  }

  @media (min-width: 768px) {
    width: 50%;

    h1 {
      font-size: 2.7rem;
    }
  }
  @media (max-width: 380px) {
    h1{
      font-size: 1.3rem;
      padding-top: 10px;
    }
  }
`;

export const P = styled.p`
  font-size: 1rem;
  padding-top: 15px;
  color: #402721;
  

  @media (min-width: 768px) {
    font-size: 1.3rem;
    margin-bottom:none;
  }
  @media (max-width: 380px) {
    font-size: 0.8rem;
    margin-bottom:none;
  }
`;

export const ContainerImg = styled.div`
  width: 100%;  
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  
  video {
    border-radius: 20px;
    object-fit: contain;
    padding: 80px 0px 10px 0px;
    
    
  }

  @media (min-width: 768px) {
    width: 50%;

    video {
      width: 40%;
    }
  }

  @media (max-width: 414px) {
    margin-bottom: 30px;

    video {
      width: 100%;
      height: 30%;
    }
  }
`;


export const ContainerEventos = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  background-color: #402721;
  justify-content: center;
`;

export const ContainerItens = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px; 
  margin-top:30px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 10px; 
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
  @media (max-width: 380px) {
    padding:5px;
  }
`;

export const Descrição = styled.p`
  font-size: 1rem;
  margin: 8px 0;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
  
`;




export const ImgCard = styled.img`
  width: 100%;
  height: auto;
  border-radius: 4px; 
  object-fit: cover;
`;





