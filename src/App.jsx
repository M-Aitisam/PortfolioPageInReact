import React from 'react'
import  Header from './components/Header'
import MainBody from './components/MainBody'
import Cards from './components/Cards'
import CardPicture from  './components/CardPicture'
import Footer from  './components/Footer'
const App = () => {

  return (
    <div>
      <Header />
      <MainBody />
      <CardPicture />
      <Cards />
      <Footer />
    </div>
  )
}

export default App
