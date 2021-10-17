import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import NewsItem from './NewsItem';
import mockData from '../../mockData/mockData.js';

describe('NewsItem test cases', () => {
  const newsItem = mockData.articles[0];
  it('News Item : Test for cover image attributes', () => {
    render(<NewsItem item={newsItem} />);
    const newsCoverImage = screen.getByTestId('news-image');
    expect(newsCoverImage).toHaveAttribute('src', newsItem.urlToImage);
    expect(newsCoverImage).toHaveAttribute('alt', 'news cover');
  });

  it('News Item : Test for news item contents', () => {
    render(<NewsItem item={newsItem} />);
    expect(screen.getByText(newsItem.title)).toBeInTheDocument();
    expect(screen.getByText(newsItem.description)).toBeInTheDocument();
    expect(screen.getByText(newsItem.author)).toBeInTheDocument();
    expect(screen.getByText(newsItem.publishedAt)).toBeInTheDocument();
  });
});
