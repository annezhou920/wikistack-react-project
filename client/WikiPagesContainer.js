import { connect } from 'react-redux';
import WikiPages from './WikiPages';
import { loadPages } from './action-creators';

const mapStateToProps = function(state) {
  return {
    allpages: state.pages
  }
}

const mapDispatchToProps = function(dispatch) {
  return {
    onLoadPages: function(){
      const thunk = loadPages();
      dispatch(thunk);
    }
  }
}

const WikiPagesContainer = connect(mapStateToProps, mapDispatchToProps)(WikiPages);

export default WikiPagesContainer;
