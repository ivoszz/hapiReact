var React = require('react');

var DefaultLayout = require('./components/layout');
var HelloMessage = require('./components/hello');

var HomePage = React.createClass({
  render: function () {
    return (
      <DefaultLayout title={this.props.title}>
        <HelloMessage name={this.props.name} />
      </DefaultLayout>
    );
  }
});

module.exports = HomePage;
