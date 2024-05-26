import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
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

  @media (min-width: 768px) {
    flex-direction: row;
    width: 80vw;
  }
`;

export const ContainerSobre = styled.div`
  width: 90%;
  text-align: justify;
  margin-bottom: 20px;

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
`;

export const P = styled.p`
  font-size: 1rem;
  padding-top: 15px;
  color: #402721;

  @media (min-width: 768px) {
    font-size: 1.3rem;
  }
`;

export const ContainerImg = styled.div`
  width: 100%;
  text-align: center;

  img {
    width: 90%;
    max-width: 550px;
    border-radius: 5px;
  }

  @media (min-width: 768px) {
    width: 50%;

    img {
      width: 100%;
    }
  }
`;




