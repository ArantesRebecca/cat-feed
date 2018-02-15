import React, { Component } from 'react';
import styled from 'styled-components';
import profile from '../../../assets/profile.jpg';

const Post = styled.div `
  margin: 5px auto;
  width: 600px;
  display: flex;
  flex-direction: column;
  background-color: white;
  box-shadow: 4px 7px 21px 4px rgba(176,173,176,0.68);
`
const PostInfo = styled.div `
  margin: 10px;
  display: flex;
  align-content: flex-start;
`
const ProfileImg = styled.img `
  width: 40px;
  height: 40px;
  border-radius: 50%;
`
const Author = styled.div `
  padding: 5px 0px 0px 5px ;
  font-weight: bolder;
  font-size: 10pt;
  `
const PostImage = styled.img `
  margin: 2px auto;
  width: 400px;
  height: 300px;
`

export default class FeedCell extends Component {
  render() {
    return (
        <Post>
          <PostInfo>
            <ProfileImg src={profile}/>
            <Author>@Joaozinho</Author>
          </PostInfo>
          <PostImage src={'http://www.amoedodistribuidora.com/site/wp-content/uploads/2016/07/99a6f17f-4585-4e46-8b57-7b9c8662ab61-300x229.jpg'} />
        </Post>
    );
  }
}
