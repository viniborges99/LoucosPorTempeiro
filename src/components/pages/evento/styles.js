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
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  align-items: center;
  margin: 0 auto;



  @media (max-width: 1200px) {
    flex-direction: row;
    width: 100vw;
  }

  @media (max-width: 1024px) {
    flex-direction: row;
    width: 90vw;
  }

  @media (max-width: 768px) {
    flex-direction: row;
    width: 80vw;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    width: 85vw;
  }

  
`;


export const ContainerSobre = styled.div`
  width: 50%;
  text-align: justify;
  margin-bottom: 30px;
  

  h1 {
    font-size: 2rem;
    color: #0D0D0D;
    text-align: center;
    margin-top: 80px;
  }
  @media (max-width: 860px) {
    width: 100%;

    h1 {
      font-size: 2rem;
    }
  }

 

  @media (max-width: 768px) {
    width: 100%;

    h1 {
      font-size: 2rem;
    }
  }
  @media (max-width: 480px) {
    width: 100%;
    h1{
      font-size: 1.7rem;
      padding-top: 10px;
    }
  }
  @media (max-width: 380px) {
    width: 100%;
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

  @media (min-width: 860px) {
    font-size: 1.3rem;
    margin-bottom:none;
  }

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom:none;
  }
  @media (max-width: 490px) {
    font-size: 1rem;
    margin-bottom:none;
  }
  @media (max-width: 380px) {
    font-size: 0.8rem;
    margin-bottom:none;
  }
`;

export const ContainerImg = styled.div`
   
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  
  video {
    width: 70%;
    border-radius: 20px;
    object-fit: contain;
    padding: 0px 5px 30px 5px;
    
    
  }

  @media (max-width: 1200px) {

  video {
    width: 90%;
    
    }
  }
 

  @media (max-width: 768px) {
    display: flex;
    

    video {
      width: 80%;
      margin-left:40px;
      margin-top: 15px;
      
    }
  }

  @media (max-width: 490px) {
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;

    video {
      width: 100%;
      height: 30%;
      margin-right: 40px;
      
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
  width: 100%;
  max-width: 500px; 
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 10px; 
  background-color: white;
  border-radius: 8px; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
  margin: 0 auto;
  overflow: hidden; /* Esconde partes da imagem que excedam o contêiner */

  @media (max-width: 768px) {
    padding: 12px;
  }

  @media (max-width: 480px) {
    padding: 8px;
  }

  @media (max-width: 380px) {
    padding: 5px;
  }
`;

export const ImgCard = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 4px; 
  object-fit: cover; /* Ajusta a imagem para cobrir o contêiner */
`;
export const Descrição = styled.p`
  font-size: 1.2rem;
  margin: 8px 0;
  font-weight: 600;
  font-family: "Roboto", sans-serif;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    font-weight: 600;

  }
  
`;









