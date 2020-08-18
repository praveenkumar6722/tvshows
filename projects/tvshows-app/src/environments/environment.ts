// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { Resource } from '@mylib/core';


export const environment = {
  production: false,
  urls: {
    [Resource.TvShows]: 'http://api.tvmaze.com/shows?page=0',
    [Resource.Show]: 'http://api.tvmaze.com/shows/:id',
    [Resource.Search]: 'http://api.tvmaze.com/search/shows',
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
