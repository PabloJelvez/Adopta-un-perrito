import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './components/Header'
import MyCard from './components/MyCard'
import Footer from './components/Footer';

function App() {
  

  return (
  <div className='divApp'>
  <Header title="Adopta un perrito"/>
  <div className='divCard'>
  
  <MyCard
  image="https://placedog.net/400"
  title="Bartolo"
  text="Lleno de energía y listo para jugar. ¡Dale a Bartolo el hogar amoroso que se merece!"
  colorBadge="success"
  textBadge="Golden Retriever"
  />

<MyCard
  image="https://placedog.net/495"
  title="Messi"
  text="Es juguetón, amigable y se lleva bien con niños y otros animales. ¡Haz de Messi parte de tu familia hoy mismo!"
  colorBadge="danger"
  textBadge="Pug"
  />

<MyCard
  image="https://placedog.net/420"
  title="Gohan"
  text="Un perro de tamaño mediano con un corazón gigante. ¡Hazte amigo de Gohan y experimenta un amor incondicional!"
  colorBadge="warning"
  textBadge="Husky"
  />

<MyCard
  image="https://placedog.net/425"
  title="Princesa"
  text="Es una compañera leal y cariñosa que adora los mimos y los abrazos. ¡Ayuda a Princesa a encontrar su final feliz!"
  colorBadge="info"
  textBadge="Beagle"
  />
  </div>
  <Footer className="footer" />
  </div>
  )
}

export default App
