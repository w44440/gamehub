import { useQuery } from '@tanstack/react-query';
import ms from 'ms';
import { Game } from '../entities/Game';
import { gameClient } from '../services/api-client';

const useGame = (id: string) =>
  useQuery<Game, Error>({
    queryKey: ['games', id],
    queryFn: () => gameClient.get(id),
    staleTime: ms('24h'),
  });

export default useGame;
