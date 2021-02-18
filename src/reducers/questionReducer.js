const initialState = {
  questions: []
};
  
export default function reducer(state = initialState, action) {
  switch(action.type) {
    case 'SET_QUESTIONS':
      return { ...state, questions: action.payload };
    default: 
      return state;
  }
}
  
