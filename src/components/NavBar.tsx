import { Box, HStack, Image, Show, useColorModeValue } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import ColorModeSwitch from './ColorModeSwitch';
import RAWG from './RAWG';
import SearchInput from './SearchInput';

const NavBar = () => {
  const bgColor = useColorModeValue('white', 'gray.800');
  return (
    <Box
      position='sticky'
      top={0}
      bg={bgColor}
      zIndex={1}
      paddingY={2}
    >
      <HStack
        justifyContent='space-between'
        paddingY={3}
      >
        <Link to='/'>
          <Image
            src={logo}
            maxH={'50px'}
            objectFit='cover'
          />
        </Link>
        <Show above='sm'>
          <SearchInput />
        </Show>
        <ColorModeSwitch />
        <RAWG />
      </HStack>
      <Show below='sm'>
        <SearchInput />
      </Show>
    </Box>
  );
};

export default NavBar;
