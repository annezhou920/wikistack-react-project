import React, { Component } from 'react';
import { Link } from 'react-router';

export default class WikiPages extends Component {
  // componentDidMount(){
  //
  //   this.props.onLoadPages();
  // }

  render () {
    const pages = this.props.allpages;
    console.log(this.props)
    return (
      <div>
        <h3>Pages</h3>
        <hr />
        <form>
          <input type="text" name="search" />
          <button type="submit">Search</button>
        </form>
        <hr />

        <h4>List of all pages</h4>
          <ul className="list-unstyled">
           <ul>
             {/* List each page title in this space */}
             <li>
               <a href="">PAGE TITLE GOES HERE</a>
             </li>
           </ul>
         </ul>


            {/* List each page title in this space */
            pages && pages.map(page => {
                return (
                  <ul className="list-unstyled" key={page.id}>
                  <li>
                    <a href="{page.name}">{page.name}</a>
                    // <Link to={`/api/wiki/:urlTitle`}>{page.name}</Link>
                  </li>
                  </ul>
                )
              })
            }


      </div>
    );
  }
}
