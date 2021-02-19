import React from 'react';
import { useSelector } from 'react-redux';
import { getComments } from '../../selectors/commentSelector';
// import CommentInput from './CommentInput';
import Comment from './Comment';

const CommentOutput = () => {
  const comments = useSelector(getComments);
  console.log(comments);

  const commentElements = comments.map(comment => (
    <>
      <li key={comment}>
        <Comment comment={comment} />
      </li>
    </>
  ));

  return (
    <ul>
      {commentElements}
    </ul>
  );
};

export default CommentOutput;
