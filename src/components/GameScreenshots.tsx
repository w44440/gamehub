import { GridItem, Image, SimpleGrid, Spinner } from '@chakra-ui/react';
import useScreenshots from '../hooks/useScreenShots';

interface Props {
  gameId: number;
}

const GameScreenshots = ({ gameId }: Props) => {
  const { data, isLoading, error } = useScreenshots(gameId);
  if (isLoading) {
    return <Spinner />;
  }
  if (error || !data) {
    throw error;
  }
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }}>
      {data.results.map((screenshot) => (
        <GridItem key={screenshot.id}>
          <Image src={screenshot.image} />
        </GridItem>
      ))}
    </SimpleGrid>
  );
};

export default GameScreenshots;
