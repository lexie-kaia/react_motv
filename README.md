# Mov

A basic movie application with React and TMDB API

[img]

![REACT](https://img.shields.io/badge/-REACT-02b3e4?style=flat-square&logo=react&logoColor=white)
![TYPESCRIPT](https://img.shields.io/badge/-TYPESCRIPT-3178c6?style=flat-square&logo=typescript&logoColor=white)

## Tasks

1. React Router

- [x] install react-router-dom, @type/react-router-dom  
       `$yarn add react-router-dom @type/react-router-dom`
- [x] set up routing - Router, Switch, Link - Header components

2. Styled Components

- [x] install styled-components, @types/styled-components, styled-reset
      `$yarn add styled-components @types/styled-components styled-reset`
- [x] create global styles + reset styles

3. TMDB API

- [x] get api key
- [x] create tmdb api class
  - Movie(nowPlaying, popular, upcoming, detail, search)
  - Tv(airingToday, popular, topRated, detail, search)

4. Container-Presenter Pattern

- [x] create container-presenter pattern
  - [Dan Abramov - Presentational and Conatiner Components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)
  - index.js
    : access point -> managing module dependencies
  - container.tsx
    : how things work -> providing the data and behavior to presenter
  - presenter.tsx
    : how things look
- [x] Home(movie)
- [x] TV
- [x] Search
- [x] Detail
