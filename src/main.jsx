import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import MovieSearcher from './MovieSearcher.jsx'
import './MovieSearcher.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <ChakraProvider>
    <MovieSearcher />
    </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
