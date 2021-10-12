import React from 'react';
import { Row } from 'react-bootstrap';
import { Search } from 'react-bootstrap-icons';

export default function Searchbar(props) {
  return (
    <Row className="search-container" noGutters={true}>
      <div className="input-group input-group-lg mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Type here to search"
          aria-label="searchbar"
          aria-describedby="searchbarId"
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
          >
            <Search/>
          </button>
        </div>
      </div>
    </Row>
  );
}
