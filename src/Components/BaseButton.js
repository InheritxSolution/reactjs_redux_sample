import React from 'react';

// Third Party
import { Button } from 'antd'

// Component

// Utility

class BaseButton extends React.Component {

  //  User interaction Method
  onClick = () => {
    if (this.props.onClick)
      this.props.onClick();
  };

  render() {
    const { className, title } = this.props;
    return (
      <Button
        className={className}
        onClick={this.props.onClick ? this.onClick : null}
      >{title}</Button>
    )
  }
}

export default BaseButton;