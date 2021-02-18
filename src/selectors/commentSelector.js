import { getPosts } from './selector';

export const getComments = state => state.comments.list;
export const getDisplayComment = state => {
  const posts = getPosts(state);
  const answers = getComments(state);

  return answers
    .filter((comment, i) => posts[i]?.comment === comment)
    .length;
};
