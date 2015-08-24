import React from 'react';

class DefaultLayout extends React.Component {
  render () {
    return (
      <html>
        <head lang='en-us'>
          <meta charSet='utf-8' />
          <title>{this.props.title}</title>
          <link rel='stylesheet' type='text/css' href='/assets/styles/style.css' />
        </head>
        <body>{this.props.children}</body>
      </html>
    );
  }
}

DefaultLayout.propTypes = {
  title: React.PropTypes.string.isRequired,
  children: React.PropTypes.object
};

export default DefaultLayout;
