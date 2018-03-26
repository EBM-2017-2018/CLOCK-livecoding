import React, {PureComponent, Fragment} from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import {AppBar, Tabs, Tab, withStyles} from 'material-ui';
import Icon from 'material-ui/Icon';
import Close from 'material-ui-icons/Close';
import Refresh from 'material-ui-icons/Refresh';
import Toolbar from 'material-ui/Toolbar';
import ClosableTab from './ClosableTab.js';

const styles = {};

class TabBar extends PureComponent {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    labels: PropTypes.arrayOf(PropTypes.string),
    handleTabChange: PropTypes.func,
    forcedTab: PropTypes.number,
    closable: PropTypes.bool
  };

  /*static defaultProps = {
    labels: ["User 1", "User 2", "User 3"]
  };*/

  state = {
    selectedTab: 0
  };

  handleChange = (event, value) => {
    this.setState({selectedTab: value});
    this.props.handleTabChange(value);
  };

  render() {
    var tabVal;
    if (typeof this.props.forcedTab !== 'undefined') {
      tabVal = this.props.forcedTab;
    } else {
      tabVal = this.state.selectedTab;
    }
    
    const { classes } = this.props;
    
    return (
      <AppBar position="static">
        <Tabs
          value={tabVal}
          onChange={this.handleChange}
          fullWidth
          >     
          {this.props.labels.map((label, i) => (
            <ClosableTab label={label} closable={this.props.closable && i !== 0} />
          ))}        
        </Tabs>  
        
      </AppBar>
    );
  }
}

export default withStyles(styles)(TabBar);
