/* eslint-disable max-len */
import { getPosts, countPosts } from './selector';

describe('post selectors', () => {

  it('selects posts from state', () => {
    const state = {
      posts:{
        posts: [{ title: 'hello i am title', body: 'hello i am body' }]
      }
    };
 
    const posts = getPosts(state);
    expect(posts).toEqual([{ title: 'hello i am title', body: 'hello i am body' }]);
  });

  it('counts number of posts', () => {
    const state = {
      posts:{
        posts: [{ title: 'hello i am title', body: 'hello i am body' }]
      }
    };
      
    expect(countPosts(state)).toEqual(1);
  });

});
