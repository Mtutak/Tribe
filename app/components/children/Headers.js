import * as React from 'react';
//using a feature of react router to manage active state of link to replace a tag href
import { Link } from 'react-router';

class Header extends React.Component {
  render() {
    return (
      <div className='header'>
        <ul>
          <li>Post App!</li>
          <li>
            <Link to='posts' activeClassName='active' >
              Posts
            </Link>
          </li>
          <li>
            <Link to='posts/new' activeClassName='active'>
              Create Post
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export { Header };