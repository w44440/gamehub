import { useQuery } from '@tanstack/react-query';
import { Trailer } from '../entities/Trailer';
import { APIClient } from '../services/api-client';

const useTrailers = (gameId: number) => {
  const trailerClent = new APIClient<Trailer>(`/games/${gameId}/movies`);
  return useQuery({
    queryKey: ['trailers', gameId],
    queryFn: trailerClent.getAll,
  });
};

export default useTrailers;
