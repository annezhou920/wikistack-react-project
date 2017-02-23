import axios from 'axios';

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

// export const getPageByurlTitle = urlTitle => {
//   return dispatch => {
//     axios.get(`/api/wiki/${urlTitle}`)
//       .then(res => dispatch(receivePage(res.data)))
//       .catch(err => console.error(err));
//   }
// }

export const addWikiPage = (page) => {
  return dispatch => {
    return axios.post('/api/wiki')
      .then(res => dispatch(receivePage(res.data)))
      .catch(err => console.error(err));
  }
}
