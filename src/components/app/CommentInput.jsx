import React, { useState } from 'react';
import { createComment } from '../../actions/commentActions';
import styles from './App.css';
import { useDispatch } from 'react-redux';


const CommentInput = () => {
  const  dispatch = useDispatch();
      
  const [commentBody, setCommentBody] = useState('');
     
      
  const handleSubmit = event => {
    event.preventDefault();
    const comment = { commentBody };
    dispatch(createComment(comment));
        
  };
        
  return (
    <>
      <section className={styles.inputSection}>
        <h5>Comment on Post Here:</h5>
        
        <form onSubmit={handleSubmit}>
          <textarea 
            type="text"
            placeholder="comment"
            value={commentBody}
            onChange={({ target }) => setCommentBody(target.value)}>
          </textarea>

          <button data-testid="createComment">Submit Comment ✓</button>
        </form>
      </section>

    </>
  );
};

export default  CommentInput;
