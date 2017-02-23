import axios from 'axios';

export const RECEIVE_PAGES = 'RECEIVE_PAGES';

export const receivePages = pages => ({
  type: RECEIVE_PAGES,
  pages
})

export const loadPages = function(){
  return dispatch => {
    axios.get('/api/wiki')
      .then(res => dispatch(receivePages(res.data)))
      .catch(err => console.error(err));
  }
}
