import React from 'react';

import App from 'components/app';

const mockData = {
  status: 'unknown',
  name: 'server.domain.xy',
  time: '2015-08-24T18:33Z'
};

export default class AppController extends React.Component {

  constructor () {
    super();
    this.state = {
      data: {
        status: '',
        name: '',
        time: ''
      }
    };
  }

  componentDidMount () {
    this.setState({data: mockData});
  }

  render () {
    return (
      <App data={this.state.data} />
    );
  }
}
