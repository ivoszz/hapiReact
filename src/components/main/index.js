import React from 'react';

import HelloMessage from 'components/hello';

class Main extends React.Component {
  render () {
    return (
      <main>
        <p>Main Content</p>
        <HelloMessage />
      </main>
    );
  }
}

export default Main;
