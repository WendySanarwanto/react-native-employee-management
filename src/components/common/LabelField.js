import React from 'react';
import { Text, View } from 'react-native';

const LabelField = ({ name, value }) => {
  const { containerStyle, labelStyle, valueStyle } = styles;
  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{ name }</Text>
      <Text style={valueStyle}>{ value }</Text>
    </View>
  );
};

const styles = {
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1    
  },
  valueStyle: {
    fontSize: 18,
    paddingRight: 5,
    paddingLeft: 5,
    lineHeight: 23,
    color: '#000',    
    flex: 2    
  }
};

export { LabelField };
