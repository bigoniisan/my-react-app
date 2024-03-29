import './App.css';
import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Footer from './components/Footer';
import ImageCarousel from './components/ImageCarousel';

function App() {
  return (
    <React.Fragment>
      <Header></Header>
      <Navbar></Navbar>
      <ImageCarousel></ImageCarousel> 
      <ImageCarousel></ImageCarousel> 
      <ImageCarousel></ImageCarousel> 
      <Footer></Footer>
    </React.Fragment>
  );
}

export default App;
