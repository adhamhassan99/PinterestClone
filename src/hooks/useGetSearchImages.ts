import {useInfiniteQuery} from '@tanstack/react-query';
import querySearchImages from '../services/ImageSearchService';

export const useGetSearchImages = (queryString: string) => {
  const query = useInfiniteQuery({
    queryFn: ({pageParam = 1}) =>
      querySearchImages.getImagesBySearch(pageParam, 'car'),
    queryKey: ['photos', queryString],
    getNextPageParam: (lastPage, allPages) => allPages.length + 1,
    getPreviousPageParam: (firstPage, allPages) => allPages.length - 1,
  });
  return {
    ...query,
  };
};
