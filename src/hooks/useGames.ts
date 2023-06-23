import { useInfiniteQuery } from '@tanstack/react-query';
import ms from 'ms';
import { Game } from '../entities/Game';
import { FetchResponse, gameClient } from '../services/api-client';
import { GameQuery } from '../states/GameQueryStore';

const useGames = (gameQuery: GameQuery) =>
  useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ['games', gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      gameClient.getAll({
        params: {
          search: gameQuery.searchText,
          parent_platforms: gameQuery.platformId,
          genres: gameQuery.genreId,
          ordering: gameQuery.sortOrder,
          page: pageParam,
          page_size: 12,
        },
      }),
    getNextPageParam: (lastPage, pages) =>
      lastPage.next ? pages.length + 1 : undefined,
    staleTime: ms('24h'),
  });

export default useGames;
