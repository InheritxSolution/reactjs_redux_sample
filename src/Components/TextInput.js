import React from 'react';

// Third party
import { Input } from 'antd'

// Component

// Utility

class TextInput extends React.Component {
  render() {
    const { value, onChange ,placeholder} = this.props;
    return (
      <Input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    )
  }
}

export default TextInput;