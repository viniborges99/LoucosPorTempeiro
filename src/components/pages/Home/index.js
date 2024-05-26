import React from 'react';
import Header from '../../header/Header';
import Sobre from '../../sobre/index';
import Produto from '../../pages/produtos';
import Footer from '../footer';
function Home (){
  return(
    <>
      <Header/>
      <Sobre/>
      <Produto/>
      <Footer/>
    </>

    

  );
}
export default Home;
