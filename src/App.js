import React from 'react';
import NavBar from './Components/NavBar';
import  Hero  from './Components/Hero';
import Data from './Components/Data';
import Email from './Components/Email';
import Cards from './Components/Cards';
import Reviews from './Components/Reviews';
import FAQs from './Components/FAQs';
import Footer from './Components/Footer';


function App() {
  return (
    <div>
      <NavBar />
      <Hero  />
      <Data  />
      <Email />
      <Cards />
      <Reviews  />
      <FAQs  />
      <Footer />
    </div>
  );
}

export default App;
