import React from 'react'
import { ItemDetail } from './ItemDetail'
import { useContext } from 'react'
import { MovieContext } from './Components/Contexts/MovieContext'

export const ItemDetailContainer = () => {

    const {movie} =useContext(MovieContext)
    

  return (
    <ItemDetail movie={movie}/>
  )
}
