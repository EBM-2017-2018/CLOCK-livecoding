import React from 'react';
import {connect} from 'react-redux';

import { checkUser } from '../redux/actions.js';

//import { checkIdentityAsync } from '../repository/tools.js';
import IsOk from "./IsOk";
import IsNotOk from "./IsNotOk";

class IdentityResp extends React.PureComponent {
  componentWillMount() {
    console.log("IdentityResp mounted");
    this.props.dispatch(checkUser());
  }

  userData = {
    authentified: false,
    name: ""
  };
  render() {
//    return (
//    <div>{this.userData.authentified}</div>

    if(this.props.authentified){
      console.log("ok pourtant");
      return <div>{this.userData.name}<IsOk/></div>;
    }
    else{
      return <IsNotOk/>;
    }

  }
}

//export default IdentityResp;

export default connect((state) => {
  return {
    user: state.name,
  }
})(IdentityResp);
