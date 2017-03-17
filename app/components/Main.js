import * as React from 'react';
import { Header } from './children/Header';
import { PostForm } from './children/Form';

class Main extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <PostForm />
      </div>
    );
  }
}

export { Main };
