import React from 'react'
import { useContext } from 'react'
import { MovieContext } from './Contexts/MovieContext'
import {ItemList} from './ItemList'
import { Box } from '@chakra-ui/react'
export const ItemListContainer = () => {

const {movie} =useContext(MovieContext)

  return (
    <Box marginTop="25px">
    <ItemList movies={movie} />  
    </Box>
  )


  }