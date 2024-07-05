import React from 'react'
import "./CardCategoria.css"
import Categoria from '../../model/Categoria'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { deletar } from '../../services/Services'

interface CardPostagem {
  dados: Categoria
}

function CardCategoria({dados}: CardPostagem) {

  let navigate = useNavigate()

  return (
    <div className='shadow-xl flex flex-col overflow-hidden justify-between rounded-2xl'>
      <div>
        <div className="flex w-full bg-[#457DAA] py-2 px-4 items-center gap-4">
          <img src='' className='h-12 rounded-full' alt="" />
          <h3 className='text-lg font-bold text-center uppercase '>{dados.nome}</h3>
        </div>
        <div className='p-4 '>
          <p>{dados.descricao}</p>
        </div>
      </div>
      <div className="flex">
      <a href='' className='w-full text-white bg-[#0D4574] hover:bg-[#457DAA] flex items-center justify-center py-2'>
          <button onClick={() => {navigate(`/editarCategoria/${dados.id}`)}} >Editar</button>
        </a>
        <a href='' className='text-white bg-red-400 hover:bg-red-700 w-full flex items-center justify-center'>
          <button onClick={() => deletar(`/categorias/${dados.id}`)} >Deletar</button>
        </a>
      </div>
    </div>
  )
}

export default CardCategoria