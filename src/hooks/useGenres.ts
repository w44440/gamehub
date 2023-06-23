import { useQuery } from '@tanstack/react-query';
import ms from 'ms';
import { genres } from '../data/genres';
import { genreClient } from '../services/api-client';

const useGenres = () =>
  useQuery({
    queryKey: ['genres'],
    queryFn: genreClient.getAll,
    staleTime: ms('24h'),
    initialData: genres,
  });

export default useGenres;
