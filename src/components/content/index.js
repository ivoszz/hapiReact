import React from 'react';

import HelloMessage from 'components/hello';

class Content extends React.Component {
  render () {
    return (
      <section>
        Content Section
        <HelloMessage />
      </section>
    );
  }
}

export default Content;
