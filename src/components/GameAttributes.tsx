import { SimpleGrid, Text } from '@chakra-ui/react';
import { Game } from '../entities/Game';
import CriticScore from './CriticScore';
import DefintionItem from './DefintionItem';

interface Props {
  game: Game;
}

const GameAttributes = ({ game }: Props) => {
  return (
    <SimpleGrid
      as='dl'
      columns={2}
      spacing={4}
    >
      <DefintionItem term='Platforms'>
        {game.parent_platforms.map(({ platform }) => (
          <Text key={platform.id}>{platform.name}</Text>
        ))}
      </DefintionItem>
      <DefintionItem term='Metascore'>
        <CriticScore score={game.metacritic} />
      </DefintionItem>
      <DefintionItem term='Genres'>
        {game.genres.map((genre) => (
          <Text key={genre.id}>{genre.name}</Text>
        ))}
      </DefintionItem>
      <DefintionItem term='Publishers'>
        {game.publishers.map((publisher) => (
          <Text key={publisher.id}>{publisher.name}</Text>
        ))}
      </DefintionItem>
    </SimpleGrid>
  );
};

export default GameAttributes;
