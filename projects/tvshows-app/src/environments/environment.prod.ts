const endPoint = 'https://api.tvmaze.com';

export const environment = {
  production: true,
  urls: {
    TvShows: `${endPoint}/shows?page=0`,
    ShowDetails: `${endPoint}/shows/`,
    Search: `${endPoint}/search/shows/`,
  }
};
