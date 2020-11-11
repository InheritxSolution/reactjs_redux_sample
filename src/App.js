import React, { Component } from 'react';

// Third Party
import 'antd/dist/antd.css';
import { BrowserRouter } from 'react-router-dom';
import { Helmet } from "react-helmet";
import { ToastContainer } from 'react-toastify';

// Utility
import Router from './Routers';
import { showErrorToast } from './Utility/helper';
import String from './Utility/String'

class App extends Component {

  // Utility Method

  // Life Cycle Method
  state = {
    isDisconnected: false
  }

  // Internet connection code
  componentDidMount() {
    if (!process.env.NODE_ENV || process.env.NODE_ENV === 'production') {
      console.log = function () { };
    }
    this.handleConnectionChange();
    window.addEventListener('online', this.handleConnectionChange);
    window.addEventListener('offline', this)
  }


  UNSAFE_componentWillUnmount() {
    window.removeEventListener('online', this.handleConnectionChange);
    window.removeEventListener('offline', this.handleConnectionChange);
  }


  handleConnectionChange = () => {
    const condition = navigator.onLine ? 'online' : 'offline';
    if (condition === 'online') {
      this.setState({ isDisconnected: false });
    } else {
      showErrorToast(String.internetConnectionLost);
      this.setState({ isDisconnected: true });
    }
  };

  render() {
    return (
      <div>
        {/* helmet use for define webName */}
        <Helmet>
          <title>{String.appName}</title>
        </Helmet>
        <ToastContainer />
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </div>
    )
  }
}


export default App;
