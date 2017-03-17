import * as React from 'react';
import { Header } from './children/Header';
import { PostForm } from './children/Form';
import { UserProfile } from './parents/UserProfile';

class Main extends React.Component {
  render() {
    return (
      <div>
        <UserProfile />
        <PostForm />
      </div>
    );
  }
}

export { Main };
