import React from 'react';
import { Text, View } from 'react-native';

const LabelField = ({ name, value, viewStyle, textStyle, hideLabel }) => {
  const { containerStyle, labelStyle, valueStyle } = styles;

  const renderLabel = (hideLabel) => {
    if (!hideLabel) {
      return <Text style={ {...labelStyle, ...textStyle}}>{ name }</Text>;
    }
  };

  return (
    <View style={ {...containerStyle, ...viewStyle} }>
      { renderLabel(hideLabel) }
      <Text style={{...valueStyle, ...textStyle}}>{ value }</Text>
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
