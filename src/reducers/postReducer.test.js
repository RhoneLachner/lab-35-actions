/* eslint-disable max-len */
import { createPost, deletePost } from '../actions/postActions';
import reducer from './postReducer';

describe('post reducer', () => {
  it('add a blog post with CREATE_POST action', () => {
    const state = {
      posts: []
    };


    const action = createPost({
      title: 'hello i am title', 
      body: 'hello i am body' 
    });

    const newState = reducer(state, action);

    expect(newState).toEqual({
      posts: [{ title: 'hello i am title', body: 'hello i am body'   }]
    }); 
  });

  it('handles the DELETE_POST action', () => {
    const state = {
      posts: [{ title: 'hello i am title', body: 'hello i am body'   }]
    };

    const action = deletePost('hello i am title');

    expect(reducer(state, action)).toEqual({
      posts: []
    });
  });
});
