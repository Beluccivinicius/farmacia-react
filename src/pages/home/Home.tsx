import React from 'react'
import heroHeader from "../../assets/header.jpg"
import CardCategoria from '../../components/cardCategoria/CardCategoria'
import ListaCategoria from '../../components/listaCategoria/ListaCategoria'

function Home() {
  return (
    <div>
        <img className='w-full h-96 object-cover top-0' src={heroHeader} alt="" />
        <ListaCategoria />
    </div>
  )
}


export default Home