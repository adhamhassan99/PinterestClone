import {useInfiniteQuery} from '@tanstack/react-query';
import querySearchImages from '../services/ImageSearchService';

export const useGetSearchImages = (
  queryString: string,
  fetchEnabled: boolean,
  rest: object,
) => {
  const query = useInfiniteQuery({
    queryFn: ({pageParam = 1}) =>
      querySearchImages.getImagesBySearch(pageParam, queryString),

    enabled: fetchEnabled,
    ...rest,
    queryKey: ['photos', ...queryString.split(' ')],
    getNextPageParam: (lastPage, allPages) => allPages.length + 1,
    getPreviousPageParam: (firstPage, allPages) => allPages.length - 1,
  });
  console.log(query.data);
  return {
    ...query,
  };
};
