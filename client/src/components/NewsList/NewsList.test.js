import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import NewsList from './NewsList';
import mockData from '../../mockData/mockData.js';

// Sample unit test for checking title and description
describe('Check for title and description in the news feed', () => {
  it('should show title of news', () => {
    render(<NewsList newsList={mockData.articles} />);
    mockData.articles.forEach((d) => {
      expect(screen.getByText(d.title)).toBeInTheDocument();
      expect(screen.getByText(d.description)).toBeInTheDocument();
    });
  });
});
