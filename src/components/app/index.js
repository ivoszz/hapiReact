import React from 'react';

import Header from 'components/header';
import Main from 'components/main';
import Footer from 'components/footer';

class App extends React.Component {

  render () {
    return (
      <div id='app'>
        <Header data={this.props.data} />
        <Main />
        <Footer />
      </div>
    );
  }
}

App.propTypes = {data: React.PropTypes.object};

export default App;
