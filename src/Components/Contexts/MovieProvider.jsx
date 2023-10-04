import React from 'react'
import { useState} from 'react'
import {MovieContext } from "./MovieContext"

export const MovieProvider = ({children}) => {

    const [movie,setMovie]=useState([])
    

  return (
    <MovieContext.Provider value={{movie,setMovie}}>
        {children}
    </MovieContext.Provider>
  )
}
