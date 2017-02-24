import { RECEIVE_PAGES, RECEIVE_PAGE } from './action-creators';

const initialPagesState = {
  pages: []
}

export default function(state = initialPagesState, action){
  const newState = Object.assign({}, state);

  switch (action.type){

    case RECEIVE_PAGES:
      newState.pages = action.pages;
      break;

    case RECEIVE_PAGE:
      newState.pages = newState.pages.concat(action.page);
      break;

    default:
      return state;
  }
  return newState;
}
