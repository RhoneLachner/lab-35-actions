const initialState = {
  comments: []
};
  
export default function reducer(state = initialState, action) {
  switch(action.type) {
    case 'SET_COMMENT':
      return { ...state, questions: action.payload };
    default: 
      return state;
  }
}
  
