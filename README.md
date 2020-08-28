# TV Shows 


This application is TV shows guide developed consuming Tvmaze REST API (http://www.tvmaze.com/api), where you can view all Tv shows, popular shows, show details, cast, episodes and can search for shows. Applicaiton has been designed & built responsive and mobile friendly :computer: :iphone:


### Prerequisite

- `Node` v12.13.1

- `npm` 6.13.2


## Project 

This Project workspace contains libraries and multi application setup. To start running an application, the libraries have to be build.


### Setup

```
npm install
```

### Build libraries

- This will build all the libraries

```
 npm run build:libs
```

- Build individual library

```
  ng build --libraryName--

  Example :  ng build core
```

### Run the project

```
 $ npm start tvshows-app
```

### Unit Tests

```
 ng test --library/project--

 Example: ng test tvshows-app
```


##  Workspace folder structure
```
.
├── README.md
├── angular.json
├── core   // library cotaints common reusable components, services used across lib & project
│   ├── src
│   │   ├── lib
│   │   │   ├── core.module.ts
│   │   │   ├── http // contains http client implementation, interceptors
│   │   │   ├── material // basic material modules used
│   │   │   ├── model  // interface models
│   │   │   └── route // route service
│   ├── 
│   ├── // library configuration files
│   └── 
├── features  // feature libraries 
│   ├── navigation
│   │   ├── src
│   │       ├── lib  // components
│   │       │   ├── footer
│   │       │   ├── header
│   │       │   └── navigation.module.ts
│   │       ├── 
│   │       ├── // library configuration files
│   │       └── 
│   └── tvshows
│       ├── src
│           ├── lib  // components
│           │   ├── genre
│           │   ├── genre-collection
│           │   ├── home-container
│           │   ├── popular-shows-carousel
│           │   ├── search-results
│           │   ├── show-card
│           │   ├── show-details
│           │   └── tvshows.module.ts
│           ├── 
│           ├── // library configuration files
│          
├── projects
│   └── tvshows-app
│       ├── src
│       │   ├── app
│       │   │   ├── app-routing.module.ts
│       │   │   ├── app.component.html
│       │   │   ├── app.component.scss
│       │   │   ├── app.component.spec.ts
│       │   │   ├── app.component.ts
│       │   │   ├── app.module.ts
│       │   │   └── pages  // page components 
│       │   │       ├── genre-page
│       │   │       ├── home-page
│       │   │       ├── search-results-page
│       │   │       └── show-details-page
│       │   ├── assets
│       │   ├── environments
│       │   │   ├── environment.prod.ts
│       │   │   └── environment.ts
│       │   ├── favicon.ico
│       │   ├── index.html
│       │   ├── main.ts
│       │   ├── polyfills.ts
│       │   ├── styles.scss
│       │   └── test.ts
│       ├── tsconfig.app.json
│       ├── tsconfig.spec.json
│       └── tslint.json
├── styling  // styling variables
├── test // mock data for testing
├── tsconfig.json
└── tslint.json
```

#### Tooling

- Angular CLI
  
  The official Angular CLI makes it easy to create and develop applications from initial commit to production deployment. It already follows our best practices right out of the box!

#### UI Components

- Angular Material (Material Design components for Angular)

#### CSS Methodology 

- Block, Element, Modifier (commonly referred to as BEM)

#### IDE used for development

- Visual studio code

  VS Code is a Free, Lightweight Tool for Editing and Debugging Web Apps.
