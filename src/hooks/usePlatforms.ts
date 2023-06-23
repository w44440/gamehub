import { useQuery } from '@tanstack/react-query';
import ms from 'ms';
import { platforms } from '../data/platforms';
import { Platform } from '../entities/Platform';
import { FetchResponse, platformClient } from '../services/api-client';

// const usePlatforms = () => useData<Platform>('/platforms/lists/parents');
const usePlatforms = () =>
  useQuery<FetchResponse<Platform>, Error>({
    queryKey: ['platforms'],
    queryFn: platformClient.getAll,
    staleTime: ms('24h'),
    initialData: platforms,
  });

export default usePlatforms;
