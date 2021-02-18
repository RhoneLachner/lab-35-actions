import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deletePost } from '../../actions/postActions';

const Post = ({ title, body, comments }) => {
  const dispatch = useDispatch();
    
  const handleClick = () => {
    dispatch(deletePost(title));
  };

  return (
    <>
      <dl>
        <dt>Title</dt>
        <dd>{title}</dd>

        <dt>Body</dt>
        <dd>{body}</dd>

        <dt>Comments:</dt>
        <dd>{comments.map(comment => (
          <>
            <input 
              id={comment}
              name="comments"
              type="text"/>
            <label htmlFor={comment}>{comment}</label>
            <button>Submit Comment</button>
          </>
        ))
        
        }</dd>
      </dl>
      <button onClick={handleClick}>Delete Post</button>
    </>
  );
};
 
Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  comments: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default Post;
