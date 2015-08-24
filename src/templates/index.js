import React from 'react';

import DefaultLayout from '../components/layout';

class HomePage extends React.Component {
  render () {
    return (
      <DefaultLayout title={this.props.title}>
      </DefaultLayout>
    );
  }
}

HomePage.propTypes = {
  title: React.PropTypes.string.isRequired
};

export default HomePage;
