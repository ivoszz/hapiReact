import React from 'react';

import moment from 'moment';
import 'moment-duration-format';

export default class TimePassed extends React.Component {

  componentDidMount () {
    this.interval = setInterval(this.forceUpdate.bind(this), 1000);
  }

  componentWillUnmount () {
    clearInterval(this.interval);
  }

  render () {
    const now = moment();
    return (
      <span>
        Uptime: {moment.duration(now.diff(moment(this.props.time)))
          .format('d [days], h [hrs], m [min], s [sec]')}
      </span>
    );
  }
}

TimePassed.propTypes = {time: React.PropTypes.string};
TimePassed.defaultProps = {time: (new Date()).toISOString()};
