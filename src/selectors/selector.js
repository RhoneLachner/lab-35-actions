// import { post } from "superagent";

// import PostList from "../components/app/PostList";

export const getPosts = state => state.posts.posts;

export const getDisplayPosts = state => getPosts(state)
  .map(posts => ({
    text: posts.text,
    comments: posts.comments
  }));
