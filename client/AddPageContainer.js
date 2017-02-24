import { connect } from 'react-redux';
import React, { Component } from 'react';
import AddPage from './AddPage';
import { addWikiPage } from './action-creators';

const mapDispatchToProps = function(dispatch) {
  return {
    addNewPage: function(page){
      console.log('page', page)
      dispatch(addWikiPage(page));
    }
  }
}

class AddPageContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      email: '',
      title: '',
      content: '',
      tags: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(input, evt){
    const change = {};
    const value = evt.target.value;
    change[input] = value;

    this.setState(change);
  }


  handleSubmit(evt){
    evt.preventDefault();
    console.log('propsContainer', this.props)
    this.props.addNewPage(this.state);
    this.setState({
      name: '',
      email: '',
      title: '',
      content: '',
      tags: ''
    })
  }

  render(){
    return (
      <AddPage
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        state={this.state}
      />
    )
  }

}
export default connect(null, mapDispatchToProps)(AddPageContainer);
