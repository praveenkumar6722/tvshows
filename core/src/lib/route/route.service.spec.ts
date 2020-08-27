import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { RouteService } from './route.service';
import { HttpApiService } from '../http/public_api';
import { HttpApiServiceMock } from 'test/mock/http-api.service.mock';
import { shows, show, search } from 'test/mock/models';

describe('RouteService', () => {
  const httpApiServiceMock = new HttpApiServiceMock();

  const showsMockExpected = [
    {
      id: 1,
      url: 'http://www.tvmaze.com/shows/1/under-the-dome',
      name: 'Under the Dome',
      type: 'Scripted',
      language: 'English',
      genres: [
        'Drama',
        'Science-Fiction',
        'Thriller'
      ],
      status: 'Ended',
      runtime: 60,
      premiered: '2013-06-24',
      officialSite: 'http://www.cbs.com/shows/under-the-dome/',
      schedule: {
        time: '22:00',
        days: [
          'Thursday'
        ]
      },
      rating: {
        average: 6.5
      },
      weight: 97,
      network: {
        id: 2,
        name: 'CBS',
        country: {
          name: 'United States',
          code: 'US',
          timezone: 'America/New_York'
        }
      },
      webChannel: null,
      externals: {
        tvrage: 25988,
        thetvdb: 264492,
        imdb: 'tt1553656'
      },
      image: {
        medium: 'http://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg',
        original: 'http://static.tvmaze.com/uploads/images/original_untouched/81/202627.jpg'
      },
      summary: '<p><b>Under the</p>',
      updated: 1573667713,
      _embedded: {},
      _links: {
        self: {
          href: 'http://api.tvmaze.com/shows/1'
        },
        previousepisode: {
          href: 'http://api.tvmaze.com/episodes/185054'
        }
      }
    },
    {
      id: 2,
      url: 'http://www.tvmaze.com/shows/2/person-of-interest',
      name: 'Person of Interest',
      type: 'Scripted',
      language: 'English',
      genres: [
        'Action',
        'Crime',
        'Science-Fiction'
      ],
      status: 'Ended',
      runtime: 60,
      premiered: '2011-09-22',
      officialSite: 'http://www.cbs.com/shows/person_of_interest/',
      schedule: {
        time: '22:00',
        days: [
          'Tuesday'
        ]
      },
      rating: {
        average: 8.9
      },
      weight: 94,
      network: {
        id: 2,
        name: 'CBS',
        country: {
          name: 'United States',
          code: 'US',
          timezone: 'America/New_York'
        }
      },
      webChannel: null,
      externals: {
        tvrage: 28376,
        thetvdb: 248742,
        imdb: 'tt1839578'
      },
      image: {
        medium: 'http://static.tvmaze.com/uploads/images/medium_portrait/163/407679.jpg',
        original: 'http://static.tvmaze.com/uploads/images/original_untouched/163/407679.jpg'
      },
      summary: '<p> your number is up, we\'ll find you.</p>',
      updated: 1588773151,
      _embedded: {},
      _links: {
        self: {
          href: 'http://api.tvmaze.com/shows/2'
        },
        previousepisode: {
          href: 'http://api.tvmaze.com/episodes/659372'
        }
      }
    }
  ];

  const detailsMock = {
    id: 169,
    url: 'http://www.tvmaze.com/shows/169/breaking-bad',
    name: 'Breaking Bad',
    type: 'Scripted',
    language: 'English',
    genres: [
      'Drama',
      'Crime',
      'Thriller'
    ],
    status: 'Ended',
    runtime: 60,
    premiered: '2008-01-20',
    officialSite: 'http://www.amc.com/shows/breaking-bad',
    schedule: {
      time: '22:00',
      days: [
        'Sunday'
      ]
    },
    rating: {
      average: 9.3
    },
    weight: 96,
    network: {
      id: 20,
      name: 'AMC',
      country: {
        name: 'United States',
        code: 'US',
        timezone: 'America/New_York'
      }
    },
    webChannel: {
      id: 1,
      name: 'Netflix',
      country: null
    },
    externals: {
      tvrage: 18164,
      thetvdb: 81189,
      imdb: 'tt0903747'
    },
    image: {
      medium: 'http://static.tvmaze.com/uploads/images/medium_portrait/0/2400.jpg',
      original: 'http://static.tvmaze.com/uploads/images/original_untouched/0/2400.jpg'
    },
    summary: '<p><b>Breaking Bad</b> follows from mild family man to a kingpin of the drug trade.</p>',
    updated: 1593191032,
    _links: {
      self: {
        href: 'http://api.tvmaze.com/shows/169'
      },
      previousepisode: {
        href: 'http://api.tvmaze.com/episodes/12253'
      }
    },
    _embedded: {
      episodes: [
        {
          id: 12252,
          url: 'http://www.tvmaze.com/episodes/12252/breaking-bad-5x15-granite-state',
          name: 'Granite State',
          season: 5,
          number: 15,
          airdate: '2013-09-22',
          airtime: '22:00',
          airstamp: '2013-09-23T02:00:00+00:00',
          runtime: 60,
          image: {
            medium: 'http://static.tvmaze.com/uploads/images/medium_landscape/198/496286.jpg',
            original: 'http://static.tvmaze.com/uploads/images/original_untouched/198/496286.jpg'
          },
          summary: '<p>Events set in motion long ago move toward a conclusion.</p>',
          _links: {
            self: {
              href: 'http://api.tvmaze.com/episodes/12252'
            }
          }
        },
        {
          id: 12253,
          url: 'http://www.tvmaze.com/episodes/12253/breaking-bad-5x16-felina',
          name: 'Felina',
          season: 5,
          number: 16,
          airdate: '2013-09-29',
          airtime: '22:00',
          airstamp: '2013-09-30T02:00:00+00:00',
          runtime: 60,
          image: {
            medium: 'http://static.tvmaze.com/uploads/images/medium_landscape/13/34302.jpg',
            original: 'http://static.tvmaze.com/uploads/images/original_untouched/13/34302.jpg'
          },
          summary: '<p>The acclaimed crime drama comes to a close in the series finale.</p>',
          _links: {
            self: {
              href: 'http://api.tvmaze.com/episodes/12253'
            }
          }
        }
      ],
      cast: [
        {
          person: {
            id: 8813,
            url: 'http://www.tvmaze.com/people/8813/jesse-plemons',
            name: 'Jesse Plemons',
            country: {
              name: 'United States',
              code: 'US',
              timezone: 'America/New_York'
            },
            birthday: '1988-04-02',
            deathday: null,
            gender: 'Male',
            image: {
              medium: 'http://static.tvmaze.com/uploads/images/medium_portrait/137/343720.jpg',
              original: 'http://static.tvmaze.com/uploads/images/original_untouched/137/343720.jpg'
            },
            _links: {
              self: {
                href: 'http://api.tvmaze.com/people/8813'
              }
            }
          },
          character: {
            id: 45539,
            url: 'http://www.tvmaze.com/characters/45539/breaking-bad-todd-alquist',
            name: 'Todd Alquist',
            image: {
              medium: 'http://static.tvmaze.com/uploads/images/medium_portrait/0/2411.jpg',
              original: 'http://static.tvmaze.com/uploads/images/original_untouched/0/2411.jpg'
            },
            _links: {
              self: {
                href: 'http://api.tvmaze.com/characters/45539'
              }
            }
          },
          self: false,
          voice: false
        },
        {
          person: {
            id: 31024,
            url: 'http://www.tvmaze.com/people/31024/laura-fraser',
            name: 'Laura Fraser',
            country: {
              name: 'United Kingdom',
              code: 'GB',
              timezone: 'Europe/London'
            },
            birthday: '1976-07-24',
            deathday: null,
            gender: 'Female',
            image: {
              medium: 'http://static.tvmaze.com/uploads/images/medium_portrait/255/637831.jpg',
              original: 'http://static.tvmaze.com/uploads/images/original_untouched/255/637831.jpg'
            },
            _links: {
              self: {
                href: 'http://api.tvmaze.com/people/31024'
              }
            }
          },
          character: {
            id: 45538,
            url: 'http://www.tvmaze.com/characters/45538/breaking-bad-lydia-rodarte-quayle',
            name: 'Lydia Rodarte-Quayle',
            image: {
              medium: 'http://static.tvmaze.com/uploads/images/medium_portrait/0/2410.jpg',
              original: 'http://static.tvmaze.com/uploads/images/original_untouched/0/2410.jpg'
            },
            _links: {
              self: {
                href: 'http://api.tvmaze.com/characters/45538'
              }
            }
          },
          self: false,
          voice: false
        }
      ]
    }
  };

  const searchMock = [
    {
      score: 28.44759,
      show: {
        id: 47296,
        url: 'http://www.tvmaze.com/shows/47296/disney-family-sundays',
        name: 'Disney Family Sundays',
        type: 'Reality',
        language: 'English',
        genres: ['Family', 'DIY'],
        status: 'Running',
        runtime: null,
        premiered: '2019-11-12',
        officialSite: 'https://www.disneyplus.com/series/disney-family-sundays/6HVS4tSPuyWI',
        schedule: { time: '', days: ['Friday'] },
        rating: { average: null },
        weight: 97,
        network: null,
        webChannel: { id: 287, name: 'Disney+', country: null },
        externals: { tvrage: null, thetvdb: 372438, imdb: 'tt11199552' },
        image: {
          medium: 'http://static.tvmaze.com/uploads/images/medium_portrait/252/631137.jpg',
          original: 'http://static.tvmaze.com/uploads/images/original_untouched/252/631137.jpg'
        },
        summary: '<p>Disney-inspired DIY projects. </p>',
        updated: 1596203419,
        _links: {
          self: { href: 'http://api.tvmaze.com/shows/47296' },
          previousepisode: { href: 'http://api.tvmaze.com/episodes/1907682' }
        }
      }
    }
  ];




  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      { provide: HttpApiService, useValue: httpApiServiceMock },
    ],
  }));

  it('should be created', () => {
    const service: RouteService = TestBed.get(RouteService);
    expect(service).toBeTruthy();
  });


  it('check getallTvShows returns expected response', () => {
    const service: RouteService = TestBed.get(RouteService);
    spyOn(httpApiServiceMock, 'get').and.returnValue(of(shows));
    service.getallTvShows().subscribe(result => expect(result).toEqual(showsMockExpected));

  });


  it('check getSearchResults returns expected response', () => {
    const service: RouteService = TestBed.get(RouteService);
    const phrase = 'disney';
    spyOn(httpApiServiceMock, 'get').and.returnValue(of(search));
    service.getSearchResults(phrase).subscribe(result => expect(result).toEqual(search));
  });


  it('check getShowDetails returns expected response', () => {
    const service: RouteService = TestBed.get(RouteService);
    const id = 1;
    spyOn(httpApiServiceMock, 'get').and.returnValue(of(show));
    service.getShowDetails(id).subscribe(result => expect(result).toEqual(detailsMock));
  });


});
