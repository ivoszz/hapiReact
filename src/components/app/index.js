import React from 'react';

import Header from 'components/header';
import Main from 'components/main';
import Footer from 'components/footer';

class App extends React.Component {

  render () {
    return (
      <div id='app'>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
