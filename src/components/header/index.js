import React from 'react';

import TimePassed from 'components/time-passed';

class Header extends React.Component {

  render () {
    return (
      <header>
        <p>Application Header</p>
        <TimePassed time={this.props.data.time} />
      </header>
    );
  }
}

Header.propTypes = {data: React.PropTypes.object};

export default Header;
