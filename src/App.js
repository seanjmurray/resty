import React from 'react';
import './app-reset.scss'
import './App.scss';
//components
import Header from './components/header';
import Restform from './components/rest-form'
import Footer from './components/footer';

function App() {
  return (
    <>
    <Header />
    <Restform />
    <Footer />
    </>
  );
}

export default App;
