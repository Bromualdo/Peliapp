import React from 'react'
import {Route,Routes} from "react-router-dom"
import { Navbar } from './Components/Navbar'
import { MovieProvider } from './Components/Contexts/MovieProvider'
import {ItemListContainer} from './Components/ItemListContainer'
import { ItemDetailContainer } from './ItemDetailContainer'

const MovieSearcher = () => {
  return (
    <MovieProvider>
      <Navbar />
      <Routes>               
      <Route exact path="/" element= {<ItemListContainer />}/>
      <Route exact path='/item/:id' element={<ItemDetailContainer/>}/>
      </Routes>
    </MovieProvider>
  );
}

export default MovieSearcher