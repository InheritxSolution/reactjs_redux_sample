import React, { Component } from 'react';

// Third party
import { Typography, Row, Col } from 'antd';
import { connect } from 'react-redux';

// Custom Component
import TextInput from '../../Components/TextInput'

// Utility
import String from '../../Utilities/String';

import style from './style.scss'

class Login extends Component {

  // Server Request

  // Utility

  // User Interaction method

  // UI Method

  // Life Cycle Method
  constructor(props) {
    super(props)
    this.state = {
      txtUserName: '',
      txtPassword: ''
    }
  }

  componentDidMount() {

  }

  render() {
    const { txtUserName, txtPassword } = this.state;
    return (
      <div>
        <Typography className="headerTitle">{String.login}</Typography>

        {/* Define grid for show input */}
        <Row>
          <Col xl={4} lg={12} md={12} sm={8} xs={8}>
            <TextInput
              value={txtUserName}
              onChange={(e) => this.setState({ txtUserName: e.target.value })}
              placeholder={String.enterUserName}
            />
          </Col>
          <Col xl={4} lg={12} md={12} sm={8} xs={8}>
            <TextInput
              value={txtPassword}
              onChange={(e) => this.setState({ txtPassword: e.target.value })}
              placeholder={String.enterPassowrd}
            />
          </Col>
        </Row>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {

  }
};

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Login);

