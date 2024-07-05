import React from 'react'
import "./CardCategoria.css"
import Categoria from '../../model/Categoria'

interface CardPostagem {
  dados: Categoria
}

function CardCategoria({dados}: CardPostagem) {
  return (
    <div className=' h-64 w-64 rounded-full	bgCategoria flex items-center justify-center hover:bg-sky-700'>
        <h1 className='text-cyan-50 '>{dados.nome}</h1>
    </div>
  )
}

export default CardCategoria