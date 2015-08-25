import React from 'react';

class DisplayText extends React.Component {

  render () {
    return (
      <span className='text'>{this.props.text}</span>
    );
  }
}

DisplayText.propTypes = {text: React.PropTypes.string.isRequired};

export default DisplayText;
