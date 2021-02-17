import React from 'react';
import PropTypes from 'prop-types';

const Post = ({ title, body }) => {
  return (
    <dl>
      <dt>Title</dt>
      <dd>{title}</dd>

      <dt>Body</dt>
      <dd>{body}</dd>
    </dl>
  );
};
 
Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired
};

export default Post;
