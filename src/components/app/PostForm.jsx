import React, { useState } from 'react';
import { createPost } from '../../actions/postActions';
import { useDispatch } from 'react-redux';
// import CommentInput from './CommentInput';
// import CommentOutput from './CommentOutput';

import styles from './App.css';

const PostForm = () => {
  const  dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    const post = { title, body };
    dispatch(createPost(post));
  
  };

  return (
    <>
      <section className={styles.inputSection}>
        <h2>Create Post</h2>

        <form onSubmit={handleSubmit}>

          <input 
            type="text" 
            placeholder="title"
            value={title}
            onChange={({ target }) => setTitle(target.value)}>
          </input>

          <textarea 
            type="text"
            placeholder="body"
            value={body}
            onChange={({ target }) => setBody(target.value)}>
          </textarea>

          <button data-testid="create">Submit ✓</button>
       
        </form>
      </section>
    </>
  );
};

export default PostForm;
