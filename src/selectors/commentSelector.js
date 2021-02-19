import { getPosts } from './selector';

export const getComments = state => state.comments.comments;
export const getDisplayComment = state => {
  const posts = getPosts(state);
  const comments = getComments(state);

  return comments
    .filter((comment, i) => posts[i]?.comment === comment)
    .length;
};
