import React from 'react';

import NewsItem from '../NewsItem/NewsItem';

// This component represents the entire news feed.
export default function NewsList(props) {
  return (
    props.newsList.map((item, index) => {
      return <NewsItem key={index} item={item}/>
    })
  );
}

