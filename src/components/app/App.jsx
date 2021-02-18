import React from 'react';
import Comments from './Comments';
import PostForm from './PostForm';
import PostList from './PostList';

export default function App() {
  return <>
    <div>
      <a href="/">Home</a>
      <h1>Posts</h1>
    </div>

    <PostForm />
    <PostList />
    <Comments />
  </>;
}
