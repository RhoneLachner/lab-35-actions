import React from 'react';
import { useSelector } from 'react-redux';
import { getComments } from '../../selectors/commentSelector';

const Comments = () => {
  const comments = useSelector(getComments);
  
  return <p>{comments}</p>;
};

export default Comments;
