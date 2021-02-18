import React from 'react';
import { useSelector } from 'react-redux';
import { getPosts } from '../../selectors/selector';
import Post from './Post';

const PostList = () => {
  const posts = useSelector(getPosts);
  console.log(posts);

  const postElements = posts.map(post => (
    <li key={post.title}>
      <Post {...post} />
    </li>
  ));

  return (
    <ul>
      {postElements}
    </ul>
  );
};

export default PostList;
