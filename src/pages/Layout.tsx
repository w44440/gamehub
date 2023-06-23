import { Box } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';

const Layout = () => {
  return (
    <Box
      paddingX={4}
      maxW={'1920px'}
      mx={'auto'}
    >
      <NavBar />
      <Outlet />
    </Box>
  );
};

export default Layout;
