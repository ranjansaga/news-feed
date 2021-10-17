import React from 'react';
import {
  render,
  screen,
  cleanup
} from '@testing-library/react';
import App from '../../App.js';
import mockData from '../../mockData/mockData.js';
import fetchMock from 'jest-fetch-mock';
fetchMock.enableMocks();

beforeEach(() => {
  fetchMock.resetMocks();
});

afterEach(cleanup);

describe('Searchbar Test Suite', () => {

  test("Check if searchbar exists", async () => {
    fetch.mockResponseOnce(JSON.stringify(mockData));
  
    render(<App />);
    const element = await screen.findByTestId('searchbar-input');
    expect(element).toBeInTheDocument();
  });
});
