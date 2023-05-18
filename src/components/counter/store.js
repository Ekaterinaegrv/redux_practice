import { createStore } from "redux";


const actionType = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  RESET: 'RESET'
};

//reducer
const counter = (state = 0, action) => {
  switch (action.type) {
    case actionType.INCREMENT:
      return state + 1;
    case actionType.DECREMENT:
      return state - 1;
    case actionType.RESET:
      return 0;
  
      default: {
        return state
      }
  }
}
//store include inly one reducer
export const store = createStore(counter);

//three actions
export const increment = { type: actionType.INCREMENT};
export const decrement = { type: actionType.DECREMENT};
export const reset = { type: actionType.RESET};


