import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ label, onClicked }) => {
  const { labelStyle, buttonStyle } = styles;

  return (
    <TouchableOpacity onPress={onClicked} style={buttonStyle}>
      <Text style={labelStyle}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  labelStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5
  }
};

export { Button };
