import './App.css';
import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ImageCarousel from './components/ImageCarousel';

function App() {
  return (
    // do https://www.uniqlo.com/au/en/men next
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
