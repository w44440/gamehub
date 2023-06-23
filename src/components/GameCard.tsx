import { Card, CardBody, HStack, Heading, Image } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { Game } from '../entities/Game';
import getCroppedImageUrl from '../services/image-url';
import CriticScore from './CriticScore';
import Emoji from './Emoji';
import PlatformIconList from './PlatformIconList';

type Props = {
  game: Game;
};

const GameCard = ({ game }: Props) => {
  const navigate = useNavigate();
  return (
    <Card
      onClick={() => navigate(`/game/${game.id}`)}
      cursor='pointer'
    >
      <Image
        src={getCroppedImageUrl(game.background_image)}
        alt={game.name}
      />
      <CardBody>
        <HStack
          justifyContent='space-between'
          marginBottom={2}
        >
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize='2xl'>
          {game.name}
          <Emoji rating={Math.round(game.rating)} />
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
