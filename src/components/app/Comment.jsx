import React from 'react';
import PropTypes from 'prop-types';
// import { useSelector } from 'react-redux';
// import { getComments } from '../../selectors/commentSelector';
import { useDispatch } from 'react-redux';
import { deleteComment } from '../../actions/commentActions';



const Comment = ({ comment }) => {
  const dispatch = useDispatch();
    
  const handleClick = () => {
    dispatch(deleteComment(comment));
  };

  return (
    <>
      <section className="commentListSection">
        <dl>
          <dt>Comments:</dt>
          <dd>{comment}</dd>
        </dl>

        <button onClick={handleClick}>Delete Comment</button>
      </section>
    </>
  );
};
 
Comment.propTypes = {
  comment: PropTypes.string.isRequired,
  
};

export default Comment;










// const Comment = () => {
//   const comment = useSelector(getComments);
//   console.log(comment);
//   <>
//     <dt>Comment:</dt>

//     <dd>
//       <>
//         <input 
//           id={comment}
//           name="comments"
//           type="text"/>

//         <label htmlFor={comment}>{comment}</label>
//         <button>Submit Comment</button>
//       </>

//     </dd>

//   </>;

//   Comment.propTypes = {
//     comments: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
//   };

//   return <p>{comment}</p>;
// }

// export default Comment;
