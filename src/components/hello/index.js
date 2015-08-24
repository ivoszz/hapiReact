import React from 'react';

class HelloMessage extends React.Component {

  render () {
    return (
      <div className='hello-message'>Hello {this.props.name}!</div>
    );
  }
}

HelloMessage.propTypes = {name: React.PropTypes.string};
HelloMessage.defaultProps = {name: 'ivoszz'};

export default HelloMessage;
