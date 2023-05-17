import { createStore } from "redux";

const store = createStore(counter);

const actions = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  RESET: 'RESET'
};


const counterFunction = (state, action) => {
  switch (action.type) {
    case actions.INCREMENT:
      return state + 1;
    case actions.DECREMENT:
      return state - 1;
    case action.RESET:
      return state = 0;
  
      default: {
        return state
      }
  }
}
