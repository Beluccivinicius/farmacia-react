import React, { useEffect, useState } from 'react'
import { buscar } from '../../services/Services'
import CardCategoria from '../cardCategoria/CardCategoria'
import Categoria from '../../model/Categoria'

function ListaCategoria() {
  const [categoria, setCategoria] = useState<Categoria[]>([])

  useEffect(() => {
    buscar("/categorias", setCategoria)
  }, [categoria.length < 1])

  return (
    <div className='pt-32'>
    <h1 className='ml-24 font-extrabold text-7xl text-slate-700 '>Categorias da farmacia</h1>
    <div className='grid gap-6 grid-cols-4 mx-24 my-40'>
      {
        categoria.map((n) => (
          <CardCategoria dados={n} />
        ))
      }
    </div>
    </div>
  )
}

export default ListaCategoria