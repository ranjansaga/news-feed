import React from 'react';
import { Row, Col } from 'react-bootstrap';

// This component represents each news in the news feed.
function NewsItem(props) {
  return (
    <Row className="news-item-container">
      <Col md={3} className="news-item-image">
        <img
          data-testid="news-image"
          src={props.item.urlToImage}
          alt="news cover"
        />
      </Col>
      <Col md={9} data-testid="news-content" className="news-item-content">
        <div className="news-item-header">
          <a href={props.item.url} rel="noreferrer" target="_blank">
            {props.item.title}
          </a>
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

export default React.memo(NewsItem);
