import {useInfiniteQuery} from '@tanstack/react-query';
import querySearchImages from '../services/ImageSearchService';

export const useGetImages = () => {
  const query = useInfiniteQuery({
    queryFn: ({pageParam = 1}) => querySearchImages.getImages(pageParam),
    queryKey: ['photos'],
    getNextPageParam: (lastPage, allPages) => allPages.length + 1,
    getPreviousPageParam: (firstPage, allPages) => allPages.length - 1,
  });
  return {
    ...query,
  };
};
