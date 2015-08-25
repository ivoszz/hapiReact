import React from 'react';

class DisplayStatus extends React.Component {

  render () {
    let statusColor = 'gray';
    if (this.props.status === 'online') {
      statusColor = 'green';
    }
    if (this.props.status === 'offline') {
      statusColor = 'red';
    }
    if (this.props.status === 'unknown') {
      statusColor = 'orange';
    }
    return (
      <span className='status' style={{color: statusColor}}>&#9679;</span>
    );
  }
}

DisplayStatus.propTypes = {status: React.PropTypes.string.isRequired};

export default DisplayStatus;
