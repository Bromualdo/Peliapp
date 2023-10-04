import { Box,FormControl,Input,  FormLabel,    FormErrorMessage,    FormHelperText, Image, } from '@chakra-ui/react'
import { useContext } from 'react'
import { MovieContext } from './Contexts/MovieContext'
import {Searchbar} from './Searchbar'
export const Navbar = () => {
  // const {setSearch,search} =useContext(MovieContext)

  return (
    <Box position="relative"  height="15vh" display="flex" justifyContent="center" alignItems="center">
      <Box       
    position="absolute"
       
       backgroundImage="https://cdn.discordapp.com/attachments/1146933013582712942/1158889619023208509/the-peanuts-movie-watching-1m4oao011ts9hjy7.jpg?ex=651de390&is=651c9210&hm=a370987e086bc7b1a30ad393c87576ded31c162cfedc10d6f17834d83c223ac0&"
       backgroundPosition="10% 66%"
       backgroundRepeat="no-repeat"
       backgroundSize="cover"
       filter="auto"
       blur="3px"
       top="0"
       left="0"
       right="0"
       bottom="0"     
      >        
      
      </Box>
      <Searchbar  />
    </Box>
  );
}
