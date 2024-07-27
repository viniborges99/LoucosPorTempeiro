import React from 'react';
import Header from '../pages/header/Header';
import Sobre from '../pages/sobre/index';
import Produto from '../pages/produtos';
import Footer from '../pages/footer';
function Home() {
  return (
    <>
      <Header />
      <Sobre />
      <Produto />
      <Footer />
    </>
  );
}
export default Home;
