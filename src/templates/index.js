import React from 'react';

import DefaultLayout from './components/layout';
import HelloMessage from './components/hello';

export default class HomePage extends React.Component {
  render () {
    return (
      <DefaultLayout title={this.props.title}>
        <HelloMessage name={this.props.name} />
      </DefaultLayout>
    );
  }
}

HomePage.propTypes = {
  name: React.PropTypes.string,
  title: React.PropTypes.string.isRequired
};
