/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deletePost } from '../../actions/postActions';
import styles from './App.css';
// import Comments from './Comment';

const Post = ({ title, body }) => {
  const dispatch = useDispatch();
    
  const handleClick = () => {
    dispatch(deletePost(title));
  };

  return (
    <>
      <section className="postListSection">

        <h3>Posts:</h3>
        <dl className={styles.postList}>
          <dt>Title:</dt>
          <dd>{title}</dd>

          <dt>Body:</dt>
          <dd>{body}</dd>

          {/* <Comments /> */}


        </dl>
        <button className={styles.deletePostButton} 
          onClick={handleClick}>Delete Post</button>
      </section>
    </>
  );
};
 
Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default Post;
