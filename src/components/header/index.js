import React from 'react';

class Header extends React.Component {

  render () {
    return (
      <header>Application Header</header>
    );
  }
}

Header.propTypes = {data: React.PropTypes.object};

export default Header;
