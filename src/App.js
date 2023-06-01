import React from 'react';
import { Header, About, Footer } from './containers';
import { Navbar } from './components';
import './App.css';

const App = () => {
  return (
    <div className='App'>
        <Navbar />
        <Header />
        <About />
        <Footer />
    </div>
  )
}

export default App