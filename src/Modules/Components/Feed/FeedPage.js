import React, { Component } from 'react';
import FeedCell from './FeedCell.js'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
  background-color: #e9eae8;
`
  const feed = [1,2,3,4,5,6]

export default class FeedPage extends Component {

  render() {
    return (
      <Container>
      {feed.map(item => (
        <FeedCell />
      ))}
      </Container>
    );
  }
}
