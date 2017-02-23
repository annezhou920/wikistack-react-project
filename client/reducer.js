import { RECEIVE_PAGES } from './action-creators';

const initialPagesState = {
  pages: []
}

export default function(state = initialPagesState, action){
  const newState = Object.assign({}, state);

  switch (action.type){

    case RECEIVE_PAGES:
      newState.pages = action.pages;
      break;

    default:
      return state;
  }
  return newState;
}
