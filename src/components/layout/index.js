import React from 'react';

class DefaultLayout extends React.Component {
  render () {
    return (
      <html>
        <head lang='en-us'>
          <meta charSet='utf-8' />
          <title>{this.props.title}</title>
        </head>
        <body>
          <div id='content'></div>
          <script src='/assets/scripts/bundle.js'></script>
        </body>
      </html>
    );
  }
}

DefaultLayout.propTypes = {
  title: React.PropTypes.string.isRequired
};

export default DefaultLayout;
