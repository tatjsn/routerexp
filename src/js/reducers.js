import { combineReducers } from 'redux';
import { RECEIVE_MESSAGE } from './actions';

function message(state = {}, action) {
  switch (action.type) {
    case RECEIVE_MESSAGE:
      return Object.assign({}, state, action.message);
    default:
      return state;
  }
}

const app = combineReducers({
  message
});

export default app;
