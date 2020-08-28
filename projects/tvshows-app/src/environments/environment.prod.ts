import { Resource } from '@mylib/core';

const endPoint = 'https://api.tvmaze.com';

export const environment = {
  production: true,
  urls: {
    [Resource.TvShows]: `${endPoint}/shows?page=0`,
    [Resource.ShowDetails]: `${endPoint}/shows/`,
    [Resource.Search]: `${endPoint}/search/shows/`,
  }
};
