export interface Show {
  id: number;
  url: string;
  name: string;
  type: string;
  language: string;
  genres: string[];
  status: string;
  runtime: number;
  premiered: string;
  officialSite: string;
  schedule: any;
  rating: any;
  weight: number;
  network: any;
  webchannel: any;
  externals: any;
  image: any;
  summary: string;
  updated: number;
  _links: any;
  _embedded: any;
}

export class SearchResults {
  score: string;
  show: Show[];
}




// {
//   "id": 1,
//   "url": "http://www.tvmaze.com/shows/1/under-the-dome",
//   "name": "Under the Dome",
//   "type": "Scripted",
//   "language": "English",
//   "genres": [
//     "Drama",
//     "Science-Fiction",
//     "Thriller"
//   ],
//   "status": "Ended",
//   "runtime": 60,
//   "premiered": "2013-06-24",
//   "officialSite": "http://www.cbs.com/shows/under-the-dome/",
//   "schedule": {
//     "time": "22:00",
//     "days": [
//       "Thursday"
//     ]
//   },
//   "rating": {
//     "average": 6.5
//   },
//   "weight": 97,
//   "network": {
//     "id": 2,
//     "name": "CBS",
//     "country": {
//       "name": "United States",
//       "code": "US",
//       "timezone": "America/New_York"
//     }
//   },
//   "webChannel": null,
//   "externals": {
//     "tvrage": 25988,
//     "thetvdb": 264492,
//     "imdb": "tt1553656"
//   },
//   "image": {
//     "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg",
//     "original": "http://static.tvmaze.com/uploads/images/original_untouched/81/202627.jpg"
//   },
// tslint:disable-next-line:max-line-length
//   "summary": "<p><b>Under the Dome</b> is the story of a small town that is suddenly and inexplicably sealed off from the rest of the world by an enormous transparent dome. The town's inhabitants must deal with surviving the post-apocalyptic conditions while searching for answers about the dome, where it came from and if and when it will go away.</p>",
//   "updated": 1573667713,
//   "_links": {
//     "self": {
//       "href": "http://api.tvmaze.com/shows/1"
//     },
//     "previousepisode": {
//       "href": "http://api.tvmaze.com/episodes/185054"
//     }
//   }
// }
