import React, { Component } from 'react';

export default class AddPage extends Component {

  render () {
    // console.log('props', this.props)
    const handleChange = this.props.handleChange;
    const handleSubmit = this.props.handleSubmit;
    const state = this.props.state;

    return (
      <div>
        <h3>Add a Page</h3>
        <hr />
        <form onSubmit={handleSubmit}>

          <div className="form-group">
            <label htmlFor="name" className="col-sm-2 control-label">Author Name</label>
            <div className="col-sm-10">
              <input name="name" type="text" className="form-control" onChange={handleChange.bind(this, 'name')}
                value={state.name} />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="email" className="col-sm-2 control-label">Author Email</label>
            <div className="col-sm-10">
              <input name="email" type="text" className="form-control" onChange={handleChange.bind(this, 'email')} value={state.email} />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="title" className="col-sm-2 control-label">Page Title</label>
            <div className="col-sm-10">
              <input name="title" type="text" className="form-control" onChange={handleChange.bind(this, 'title')} value={state.title} />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="content" className="col-sm-2 control-label">Content</label>
            <div className="col-sm-10">
              <textarea name="content" onChange={handleChange.bind(this, 'content')} value={state.content}></textarea>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="status" className="col-sm-2 control-label">Status</label>
            <div className="col-sm-10">
              <select name="status">
                <option>open</option>
                <option>closed</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="tags" className="col-sm-2 control-label">Tags</label>
            <div className="col-sm-10">
              <input name="tags" type="text" className="form-control" onChange={handleChange.bind(this, 'tags')} value={state.tags} />
            </div>
          </div>

          <div className="col-sm-offset-2 col-sm-10">
            <button type="submit" className="btn btn-primary">submit</button>
          </div>

        </form>
      </div>
    );
  }
}
