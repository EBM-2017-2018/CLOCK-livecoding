import React from 'react';

import { backendCheckUser } from '../repository/user.repository';
import PropTypes from 'prop-types';
import IsOk from "./IsOk";
import IsNotOk from "./IsNotOk";

class IdentityResp extends React.PureComponent {
  static propTypes = {
    userData: PropTypes.shape({
      name: PropTypes.string,
      authentified: PropTypes.bool
    })
  };

  state = {
    userData: {
      name: ""
    },
    authentified: false,
    requested: false
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
    if(!this.state.requested){
      return (
      <div>Checking User</div>
      );
    }
    if(this.state.authentified){
      return <div>{this.userData.name}<IsOk/></div>;
    }
    else{
      return <IsNotOk/>;
    }
  }
}

export default IdentityResp;
