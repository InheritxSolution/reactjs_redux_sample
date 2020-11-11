import React, { Component } from 'react';

// Third party
import { Typography } from 'antd';
import RoutePath from '../../Routers/RoutePath';
import { connect } from 'react-redux';

// Custom Component
import BaseButton from '../../Components/BaseButton';

// Utility
import String from '../../Utilities/String';

import style from './style.scss'
import action from '../../redux/actions/action';

class Home extends Component {

  // Server Request

  // Utility Method

  // User Interaction Method
  btnHomeClick = () => {
    this.props.history.push(RoutePath.Login)
  }

  // UI Method

  // Life Cycle Method
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  componentDidMount() {

  }

  render() {
    return (
      <div>
        <Typography>{String.home}</Typography>
        <BaseButton
          className={"buttonStyle"}
          onClick={this.btnHomeClick}
          title={String.loginbtn} />
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {

  }
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(action.logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
