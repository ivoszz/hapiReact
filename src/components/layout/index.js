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
        <body>
          <div id='content' className='container'></div>
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
