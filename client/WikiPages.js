import React, { Component } from 'react';
import { Link } from 'react-router';

export default class WikiPages extends Component {
  // componentDidMount(){
  //
  //   this.props.onLoadPages();
  // }

  render () {
    const pages = this.props.allpages;
    console.log('pages', pages)
    return (
      <div>
        <h3>Pages</h3>
        <hr />
        <form>
          <input type="text" name="search" />
          <button type="submit">Search</button>
        </form>
        <hr />

            {/* List each page title in this space */
            pages.map(page => {
                return (
                  <ul className="list-unstyled" key={page.id}>
                    <li>
                      <Link to={`/wiki/${page.urlTitle}`}>{page.title}</Link>
                    </li>
                  </ul>
                )
              })
            }


      </div>
    );
  }
}
