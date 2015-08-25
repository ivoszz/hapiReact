import React from 'react';

import DisplayText from 'components/display-text';
import TimePassed from 'components/time-passed';

class Header extends React.Component {

  render () {
    return (
      <header>
        <DisplayText text={this.props.data.name} />
        <TimePassed time={this.props.data.time} />
      </header>
    );
  }
}

Header.propTypes = {data: React.PropTypes.object};

export default Header;
