import { Grid, GridItem, HStack, Show } from '@chakra-ui/react';
import GameGrid from '../components/GameGrid';
import GameHeading from '../components/GameHeading';
import GenresList from '../components/GenresList';
import PlatformSelector from '../components/PlatformSelector';
import SortSelector from '../components/SortSelector';

const App = () => {
  return (
    <Grid
      templateAreas={{ base: `"main"`, lg: `"aside main"` }}
      templateColumns={{ base: '1fr', lg: '200px 1fr' }}
    >
      <Show above='lg'>
        <GridItem
          area='aside'
          paddingX={2}
          width={'200px'}
          pos='fixed'
        >
          <GenresList />
        </GridItem>
      </Show>
      <GridItem area='main'>
        <GameHeading />
        <HStack
          spacing={4}
          marginBottom={4}
        >
          <PlatformSelector />
          <SortSelector />
        </HStack>
        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default App;
