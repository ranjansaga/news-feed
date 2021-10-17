import React from 'react';
import { Row } from 'react-bootstrap';
import { Search } from 'react-bootstrap-icons';

// This component represents the searchbar.
export default function Searchbar(props) {
  return (
    <Row className="search-container">
      <div className="input-group input-group-lg mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Type here to search"
          aria-label="searchbar"
          aria-describedby="searchbarId"
          data-testid="searchbar-input"
          onChange={(e) => {
            props.updateSearchString(e.target.value);
          }}
        />
        <div className="input-group-append">
          <button
            onClick={(e) => {
              props.getSearchResults(e.target.value);
            }}
            className="input-group-text"
            id="searchbarId"
            data-testid="searchbar-submit"
          >
            <Search />
          </button>
        </div>
      </div>
    </Row>
  );
}
