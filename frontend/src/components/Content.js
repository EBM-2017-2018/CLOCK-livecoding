import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
//import {Button} from 'material-ui';

import IdentityResp from './IdentityResp';

class Content extends PureComponent {
  static propTypes = {
    className: PropTypes.string
  };

  static defaultProps = {
    className: ''
  };

  state = {
    name: 'Albert',
  }


  render() {
    return (
      <div className={this.props.className}>
        <IdentityResp />
      </div>
    )
  }
}

export default Content;
