import {useQuery} from 'react-query';
import querySearchImages from '../services/ImageSearchService';

export const useGetImages = (params: object) => {
  const query = useQuery({
    queryFn: () => querySearchImages.getImages(params),
  });
  return {
    ...query,
  };
};
