import React, {PureComponent} from 'react';
import {findDOMNode} from 'react-dom';
import PropTypes from 'prop-types';
import { Tooltip, IconButton, withStyles } from 'material-ui';
import Chip from 'material-ui/Chip';
import {Group as UsersIcon} from 'material-ui-icons';

import UsersMenu from './UsersMenu';
import IdentityResp from './IdentityResp';
import CodePages from './CodePages';

const styles = theme => ({
  root: {
    marginTop: 56,
    '@media (min-width:0px) and (orientation: landscape)': {
      marginTop: 48
    },
    '@media (min-width:600px)': {
      marginTop: 64
    }
  },
  content: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 5,
  },
  chip: {
    margin: '15px'
  }
});

class Content extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    classes: PropTypes.object.isRequired,
  };

  static defaultProps = {
    className: ''
  };

  state = {
    session: {
      opened: false,
      id: "",
      name: "",  
    },
    users: [],
    htmlTxt: "",
    cssTxt: "",
    jsTxt: "",
    usersMenuOpen: false,
    anchorEl: null,
  };

  button = null;

  handleUsersMenuClick = () => {
    this.setState({
      usersMenuOpen: true,
      anchorEl: findDOMNode(this.button)
    });
  };

  handleUsersMenuClose = () => {
    this.setState({
      usersMenuOpen: false,
    });
  };

  openNewUser = (userId) => {
    console.log(`Getting new user's code: ${userId}`);

  }

  openSession = (htmlTxt, cssTxt, jsTxt, id, users, name) => {
    console.log(`Session opened (html: ${htmlTxt}, css: ${cssTxt}, js: ${jsTxt}, sessionId: ${id}, sessionName: ${name}`);
    this.setState({session: {opened: true, id, name}, users, htmlTxt, cssTxt, jsTxt});
  };

  render() {
    if (this.state.session.opened){
      return (
        <div className={this.props.className}>
          <Chip label={`Session ${this.state.session.name}`} className={this.props.classes.chip} />
          
          <Tooltip id="apps-icon" title="Users">
            <IconButton
              color="inherit"
              aria-label="users"
              ref={node => this.button = node}
              onClick={this.handleUsersMenuClick}>
              <UsersIcon/>
            </IconButton>
          </Tooltip>
          <UsersMenu
            open={this.state.usersMenuOpen}
            anchorEl={this.state.anchorEl}
            closeCallback={this.handleUsersMenuClose}
            newUser={this.openNewUser}
          />

          <CodePages
          htmlTxt={this.state.htmlTxt}
          cssTxt={this.state.cssTxt}
          jsTxt={this.state.jsTxt}
          users={this.state.users}
          />
        </div>
      );
    } else {
      return (
        <div className={this.props.className}>
          <IdentityResp sessionFunc={this.openSession} />
        </div>
      );
    }
  }
}

export default withStyles(styles)(Content);
