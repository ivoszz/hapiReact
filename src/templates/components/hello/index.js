import React from 'react';

class HelloMessage extends React.Component {

  render () {
    return (
      <div>Hello {this.props.name}!</div>
    );
  }
}

HelloMessage.propTypes = {name: React.PropTypes.string};
HelloMessage.defaultProps = {name: 'ivoszz'};

export default HelloMessage;
