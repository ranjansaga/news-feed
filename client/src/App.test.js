import React from 'react';
import {
  render,
  screen,
  cleanup
} from '@testing-library/react';
import App from './App';
import mockData from './mockData/mockData.js';
import fetchMock from 'jest-fetch-mock';
fetchMock.enableMocks();

beforeEach(() => {
  fetchMock.resetMocks();
});

afterEach(cleanup);

describe('App Test Suite', () => {

  test("Check for load more button", async () => {
    fetch.mockResponseOnce(JSON.stringify(mockData));
  
    render(<App />);
    const element = await screen.findByTestId('load-more-button');
    expect(element).toBeInTheDocument();
  });
});
