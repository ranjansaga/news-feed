import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import NewsList from './NewsList';
import mockData from '../../mockData/mockData.js';

describe('NewsList Test Suite', () => {
  it('Check for all NewsItem', () => {
    render(<NewsList newsList={mockData.articles} />);
    mockData.articles.forEach((item, index) => {
      expect(screen.getByText(item.title)).toBeInTheDocument();
    });
  });
});
