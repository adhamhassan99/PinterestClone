import axios, {AxiosRequestConfig} from 'axios';

const unsplashBaseUrl = 'https://api.unsplash.com/';

export const httpClient = axios.create({
  baseURL: unsplashBaseUrl,
});

const defaultConfig = (config: AxiosRequestConfig) => {
  config.headers = {
    'Content-Type': 'application/json',
    Authorization: 'Client-ID G0xbK_zRq65nfgIMhCBir0SMuBQ5UmS7IVybMENIoZ4',
    'Accept-Version': 'v1',
  };
  return config;
};

httpClient.interceptors.request.use(async config => {
  return defaultConfig(config);
});
