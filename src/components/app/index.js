import React from 'react';

import Header from 'components/header';
import Content from 'components/content';
import Footer from 'components/footer';

class App extends React.Component {

  render () {
    return (
      <div id='app'>
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
