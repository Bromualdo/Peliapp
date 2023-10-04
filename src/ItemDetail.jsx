import { useContext } from 'react'
import { MovieContext } from './Components/Contexts/MovieContext'
import { Link, useParams } from 'react-router-dom'
import {Image,Box,Button,Text,keyframes} from '@chakra-ui/react'
import { motion } from 'framer-motion'

const boardurl="https://cdn.discordapp.com/attachments/1146933013582712942/1159139981412024380/halloween-party.jpg?ex=651eccbb&is=651d7b3b&hm=92d3090b8ddfbd1c8f408aa6d37eb5fc1cb41ab7d09a7ec6949990b0dbf024b2&"

const animationKeyFrames=keyframes`
0%{opacity:0};
100%{opacity:1}`

const animation=`${animationKeyFrames} ease 2s`

export const ItemDetail = ({movie}) => {
    const {id}=useParams()
    const {setMovie} =useContext(MovieContext)
    
    const detailedMovie=movie.filter((item)=>item.id==id)    
    const { original_title:title,overview,poster_path:poster}=detailedMovie[0]
     
    
   
  

 
    
    
  return (
    <Box as={motion.div} animation={animation} margin="20px" display="flex" justifyContent="center" gap="20px" fontFamily='Young Serif, serif' >
    <Image  src={poster==null
        ?"https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"        
        :`https://image.tmdb.org/t/p/w500/${poster}`}
        borderRadius="md">
    </Image>
    <Box display="flex" justifyContent="space-between" justifyItems="center" flexDirection="column" bgImage={boardurl} padding="10px" borderRadius="md" >
        <Box>

        <Text w="500px" fontSize="50px" display="flex" justifyContent="center" color="white">{title}</Text>
        <Text color="white"  w="500px" marginTop="50px"  >{overview}</Text>
        </Box>
        <Box display="flex" alignItems="center" justifyContent="center">
        <Link to={`/`}>
            <Button w="300px" onClick={()=>setMovie([])} fontFamily=" Dancing Script, cursive" fontSize="30px">Volver</Button>            
        </Link>
        </Box>

    </Box>
    </Box>
  )
}
