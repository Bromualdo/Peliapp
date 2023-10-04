import { Box,FormControl,Input,  FormLabel,    FormErrorMessage,    FormHelperText, Image, keyframes} from '@chakra-ui/react'
import { useContext, useState } from 'react'
import { MovieContext } from './Contexts/MovieContext'
import { motion } from 'framer-motion'

const animationKeyFrames= keyframes`
0%{transform: rotate(15deg);}
25%{transform: rotate(-15deg)}
50%{transform: rotate(15deg)}
75%{transform: rotate(-15deg)}
100%{transform: rotate(15deg)}`

const animation = `${animationKeyFrames} 2s infinite`

export const Searchbar = () => {
  
const [search,setSearch] = useState('')
const {setMovie,movie} =useContext(MovieContext)

const Pelifetch = async ()=>{
      try{
           const response = await(fetch(`https://api.themoviedb.org/3/search/movie?query=${search}&api_key=8748077aaedef210c4ee28056d4a26cb`))
           const data = await response.json()  
           setMovie(data.results)         
          }
       catch(error){
           console.log(error);
          }          
      } 
const changeFilm = (e)=>{
  setSearch(e.target.value);  
}
const handleSubmit = (e)=>{
  e.preventDefault()
  
  if(search.length >0) Pelifetch()
}


  return (
    <>      
      {movie.length==0 && (
        <Box filter="auto"
        border
        blur="0px">
        <form onSubmit={handleSubmit} >
        <FormControl display="flex" alignSelf="flex-end" flexDirection="column">
        <FormLabel color="white" >Ingrese una Pelicula</FormLabel>      
        
        <Input  w="500px" value={search} onChange={changeFilm} fontFamily="'Roboto', sans-serif"  backgroundColor="white" border _focus={{borderColor:"yellow",boxShadow:`1.5px 1.5px yellow`}}/>
        
        <FormHelperText display="flex" color="white" alignItems="center" justifyContent="flex-end" >... y presiona <Image as={motion.img} animation={animation} marginLeft="5px"src="./src/assets/enter.png" maxH="30px"/> </FormHelperText>
        </FormControl>
        </form>
        </Box>
        
    )
      }
    </>
  )
}
