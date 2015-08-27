import React from 'react';

import DisplayStatus from 'components/display-status';
import DisplayText from 'components/display-text';
import TimePassed from 'components/time-passed';

class Header extends React.Component {

  render () {
    return (
      <header className='clearfix'>
        <div className='left'>
          <DisplayText text={this.props.data.name} />
          &nbsp;
          <DisplayStatus status={this.props.data.status} />
        </div>
        <div className='right'>
          <TimePassed time={this.props.data.time} />
        </div>
      </header>
    );
  }
}

Header.propTypes = {data: React.PropTypes.object};

export default Header;
