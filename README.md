<div align="center">
<h1>Sagaas News Feed</h1>

## Introduction
A single page application to browse through latest news at United Kingom. Click on `Load More` button to see more news links.

A snapshot of the application is as shown below

  <img src="covers/news-feed-cover.png" alt="cover"/></a>
</div>

## Technologies

- [React](https://reactjs.org/)
- [react-bootstrap](https://react-bootstrap.github.io/)
- [Express](https://expressjs.com/)
- [Nodejs](https://nodejs.dev)
- [newsapi.org](https://newsapi.org/docs)
- [React Testing library](https://testing-library.com/docs/)

## Run this application in your local

- `git clone https://github.com/ranjansaga/news-feed.git`
- `npm install` (after navigating inside the directory)
- `npm install` (inside the client folder)
- `npm run dev` (Run this from the root folder. This starts both backend and front end server)

## Architechture & Features
This is built using the MERN stack(Mongodb, Express, React and Nodejs). To get the latest news in UK, we are using [newsapi.org](https://newsapi.org/docs). These apis can be consumed directly from the front end application.

- We get only 5 items at a time and get the next 5 items on click on `Load more` button.

- When a search is performed, We make the same api call with searchString as query parameter to get the filtered news feed.

- We display an error message when there is no results for a search or api fails for any reason.

#### Back end
The nodejs setup is done only for demonstration purpose. To get the latest news in UK, this api is used [top head lines](https://newsapi.org/docs/endpoints/top-headlines)

#### Front end
The react app is created using create-react-app. It uses react hooks. The 'client' folder inside the root folder contains all the front end code.

React components used are as follows:

- `App` : Container component that holds the state.
- `SearchBar` : Functional component that takes care of search.
- `NewsList` : Functional component which holds all the news feed.
- `NewsItem` : Functional component that represents one news item in the feed.

#### Watch for style changes
Node-sass is used to watch the changes done across all the scss files. All the files are imported inside App.scss and one css file is created (App.css). To watch for css changes run this npm script command. 

- npm run watch:css




----------------------------------------------------------------

<div align="center">More features coming soon</div>