
import { Heading,Image,keyframes, Box,Flex } from '@chakra-ui/react'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const animationKeyFrames=keyframes`
0%{opacity:0};
100%{opacity:1}`

const animation=`${animationKeyFrames} ease 3s`

export const ItemList = ({movies}) => {

  
  return (
    <Flex flexWrap="wrap" gap="5px" justifyContent="center" alignItems="baseline"   >
     {movies.map((item)=>{
      return (        
          <Box as={motion.div} animation={animation} maxW='sm' w="20%" key={item.id}  >
    <Link to={`/item/${item.id}`}>
    <Image
      as={motion.img}
      
      whileHover={{scale:1.05}}
      className='moviecard'     
      cursor="pointer"
      src={item.poster_path==null
        ?"https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"        
        :`https://image.tmdb.org/t/p/w500/${item.poster_path}`}      
        
        h="400px"
        w="100%"
        borderRadius='10px'
        />
        </Link>
    <Flex mt='2' spacing='3' justifyContent="center" alignItems="center" marginBottom="5px">
      <Heading size='md' >{item.original_title}</Heading>    
      
    </Flex>
  
  </Box>
      )
    })} 
    
    </Flex>
  )
}
