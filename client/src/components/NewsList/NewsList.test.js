import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import NewsList from './NewsList';
import mockData from '../../mockData/mockData.js';

describe('todo list test', () => {
  it('should show title of news', () => {
    render(<NewsList newsList={mockData.articles} />);
    mockData.articles.forEach((d) => {
      expect(screen.getByText(d.title)).toBeInTheDocument();
      expect(screen.getByText(d.description)).toBeInTheDocument();
    });
  });
});