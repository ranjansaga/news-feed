import React, { useState, useEffect } from 'react';
import { Container, Spinner } from 'react-bootstrap';
import SearchBar from './components/Searchbar/Searchbar';
import NewsList from './components/NewsList/NewsList';
import NewsNavigationBar from './components/NewsNavigationBar/NewsNavigationBar';
import './App_Constants';
import './App.css';
import { appConstants } from './App_Constants';

// The container component of the application
function App() {
  const [isLoading, setLoadingFlag] = useState(false);
  const [newsList, setNewsList] = useState([]);
  const [searchString, setSearchString] = useState('');
  const [page, increamentPage] = useState(1);
  const [errorMessage, setErrorMessage] = useState('');

  // Update the searchString in state when user
  // enters the search keyword in the searchbar.
  const updateSearchString = (searchString) => {
    setSearchString(searchString);
  };

  // This function converts the news published time
  // from UTC timestamp to user readable format.
  const convertTimeReadableFormat = (dataList) => {
    dataList.forEach((item) => {
      const date = new Date(item.publishedAt);
      item.publishedAt = date.toDateString();
    });
  };

  // This function makes an api call to the backend
  // to get the news feed, using the query params supplied.
  const loadNews = () => {
    setLoadingFlag(true);
    const url = `/news?pageSize=${appConstants.PAGE_SIZE}&page=${page}&searchString=${searchString}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        convertTimeReadableFormat(data.articles);
        const updatedNewsList = newsList.concat(data.articles);
        setNewsList(updatedNewsList);
        setErrorMessage('');
      })
      .catch((error) =>
        setErrorMessage(
          'Looks like something went wrong. Please try again later'
        )
      )
      .finally(() => {
        setLoadingFlag(false);
      });
  };

  // Make an API call to the backend to get the filtered
  // results for the search string passed.
  const getSearchResults = () => {
    setLoadingFlag(true);
    const url = `/news?pageSize=${appConstants.PAGE_SIZE}&page=${page}&searchString=${searchString}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        convertTimeReadableFormat(data.articles);
        const updatedNewsList = data.articles;
        setNewsList(updatedNewsList);
        if (!data.articles.length) {
          setErrorMessage('No results found for this search');
        } else {
          setErrorMessage('');
        }
      })
      .catch((error) =>
        setErrorMessage(
          'Looks like something went wrong. Please try again later'
        )
      )
      .finally(() => {
        setLoadingFlag(false);
      });
  };

  // This function gets called when 'Load More'
  // button is clicked.
  const getMoreItems = () => {
    increamentPage((page) => page + 1);
  };

  useEffect(() => {
    loadNews();
  }, [page]);

  return (
    <React.Fragment>
      <NewsNavigationBar />
      <Container className="app-container">
        <SearchBar
          updateSearchString={updateSearchString}
          getSearchResults={getSearchResults}
        />
        <NewsList newsList={newsList} />
        {errorMessage && (
          <p data-testid="error-content" className="error-message">
            {errorMessage}
          </p>
        )}
        <div className="load-more-container">
          {isLoading ? (
            <Spinner data-testid="spinner-container" animation="border" role="status">
              <span className="visually-hidden"></span>
            </Spinner>
          ) : (
            <button
              data-testid="load-more-button"
              className="load-more-button"
              onClick={() => {
                getMoreItems();
              }}
            >
              Load More
            </button>
          )}
        </div>
      </Container>
    </React.Fragment>
  );
}

export default App;
