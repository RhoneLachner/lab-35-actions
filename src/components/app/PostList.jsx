import React from 'react';
import { useSelector } from 'react-redux';
import { getPosts } from '../../selectors/selector';
import CommentInput from './CommentInput';
import CommentOutput from './CommentOutput';
// import CommentInput from './CommentInput';
// import CommentOutput from './CommentOutput';

import Post from './Post';

const PostList = () => {
  const posts = useSelector(getPosts);
  console.log(posts);

  const postElements = posts.map(post => (
    <>
      <li key={post.title}>
        <Post {...post} />
        <CommentOutput />
        <CommentInput />
      </li>
    </>

  ));

  return (
    <ul>
      {postElements}
      
    </ul>
    
  );
};

export default PostList;
