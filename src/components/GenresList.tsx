import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
} from '@chakra-ui/react';
import useGenres from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-url';
import useGameQueryStore from '../states/GameQueryStore';

const GenresList = () => {
  const { data, isLoading } = useGenres();
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setGenreId = useGameQueryStore((s) => s.setGenreId);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <Heading
        paddingY={2}
        as='h2'
        size='xl'
      >
        Genres
      </Heading>
      <List>
        {data.results.map((genre) => (
          <ListItem
            key={genre.id}
            paddingY='5px'
          >
            <HStack>
              <Image
                boxSize='32px'
                objectFit='cover'
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
                alt={genre.name}
              ></Image>
              <Button
                whiteSpace='normal'
                textAlign='left'
                fontWeight={genreId === genre.id ? 'bold' : 'normal'}
                fontSize='lg'
                variant='link'
                onClick={() => setGenreId(genre.id)}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenresList;
