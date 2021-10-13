import React from 'react';
import { Row, Col } from 'react-bootstrap';

// This component represents each news in the news feed.
export default function NewsItem(props) {
  console.log('inside news item', props.item.title)
  return (
    <Row className="news-item-container" noGutters={true}>
      <Col md={3} className="news-item-image" noGutters={true}>
        <img src={props.item.urlToImage} alt="" />
      </Col>
      <Col md={9} className="news-item-content" noGutters={true}>
        <div className="news-item-header">
          <a href={props.item.url} rel="noreferrer" target="_blank">{props.item.title}</a>
        </div>
        <div className="news-item-desc">{props.item.description}</div>
        <div className="news-item-author-time-container">
          <div className="author">{props.item.author}</div>
          <div className="time">{props.item.publishedAt}</div>
        </div>
      </Col>
    </Row>
  );
}
