import axios from 'axios';
import { hashHistory } from 'react-router';

export const RECEIVE_PAGES = 'RECEIVE_PAGES';
export const RECEIVE_PAGE = 'RECEIVE_PAGE';

export const receivePages = pages => ({
  type: RECEIVE_PAGES,
  pages
})

export const receivePage = page => ({
  type: RECEIVE_PAGE,
  page
})

export const loadPages = () => {
  return dispatch => {
    axios.get('/api/wiki')
      .then(res => dispatch(receivePages(res.data)))
      .catch(err => console.error(err));
  }
}

export const addWikiPage = page => {
  return dispatch => {
    console.log('p', page)
    return axios.post('/api/wiki', page)
      .then(res => {
        dispatch(receivePage(res.data));
        hashHistory.push('/')
      })
      .catch(err => console.error(err));
  }
}

// export const getPageByurlTitle = urlTitle => {
//   return dispatch => {
//     axios.get(`/api/wiki/${urlTitle}`)
//       .then(res => dispatch(receivePage(res.data)))
//       .catch(err => console.error(err));
//   }
// }
