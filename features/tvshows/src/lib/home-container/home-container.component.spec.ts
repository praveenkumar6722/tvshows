import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeContainerComponent } from './home-container.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { Show } from '@mylib/core';

describe('HomeContainerComponent', () => {
  let component: HomeContainerComponent;
  let fixture: ComponentFixture<HomeContainerComponent>;

  const showsMock = [
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


  const routerMock = {
    navigate: jasmine.createSpy('navigate'),
  };


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeContainerComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: Router, useValue: routerMock },
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeContainerComponent);
    component = fixture.componentInstance;

    component.shows = showsMock;
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should navigate  to "detail" when showCardClicked is called', () => {
    const data = '1';
    const path = 'detail';
    component.showCardClicked(data);
    expect(routerMock.navigate).toHaveBeenCalledWith([path, data]);
  });


});
