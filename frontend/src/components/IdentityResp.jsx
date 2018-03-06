import React from 'react';
import { withStyles } from 'material-ui';

import { backendCheckUser } from '../repository/user.repository';
import PropTypes from 'prop-types';
import IsOk from "./IsOk";
import IsNotOk from "./IsNotOk";
import UserInterface from "./UserInterface";

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
  }
});

class IdentityResp extends React.PureComponent {
  static propTypes = {
    userData: PropTypes.shape({
      name: PropTypes.string,
      authentified: PropTypes.bool
    }),
    sessionFunc: PropTypes.func
  };

  state = {
    userData: {
      name: ""
    },
    authentified: false,
    requested: false,
    sessionId: ""
  }

  componentWillMount() {
    console.log("IdentityResp mounted");
  }

  async componentDidMount(){
    const {userData, authentified} = await backendCheckUser();
    this.setState({userData: userData, authentified: authentified});
    this.setState({requested: true});
  }

  render() {
    if(this.state.sessionId.length > 0){
      return(
        <UserInterface />
      );
    } else {
      if(!this.state.requested){
        return (
        <div>Checking User</div>
        );
      }

      if(this.state.authentified){
        return <IsOk name={this.state.userData.name} contentOpenSession={this.props.sessionFunc} />;
      } else {
        return <IsNotOk/>;
      }  
    }
  }
}

export default withStyles(styles)(IdentityResp);
