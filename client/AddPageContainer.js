import { connect } from 'react-redux';
import React, { Component } from 'react';
import AddPage from './AddPage';
import { addWikiPage } from './action-creators';

const mapDispatchToProps = function(dispatch) {
  return {
    addWikiPage: function(){
      dispatch(addWikiPage());
    }
  }
}

class AddPageContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      inputValue: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt){
    const value = evt.target.value;
    this.setState({inputValue: value});
  }


  handleSubmit(evt){
    evt.preventDefault();
    this.props.addWikiPage(this.state.inputValue);
    this.setState({inputValue: ''})
  }

  render(){
    return (
      <AddPage
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        inputValue={this.state.inputValue}
      />
    )
  }

}
export default connect(null, mapDispatchToProps)(AddPageContainer);
