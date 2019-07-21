import React, { Component } from 'react';
import { Picker, Text, View } from 'react-native';

class DayPicker extends Component {
  onValueChanged = value => {
    const { onValueChanged } = this.props;
    if (onValueChanged) {
      onValueChanged(value);
    }
  }

  render() {
    const { label, value } = this.props;
    const { containerStyle, labelStyle, pickerStyle } = styles;

    return (
      <View style={ containerStyle }>
        <Text style={ labelStyle }>{ label }</Text>
        <Picker
          style={ pickerStyle }
          selectedValue={ value }
          onValueChange={ this.onValueChanged }
          >
          <Picker.Item label="Monday" value="Monday"/>
          <Picker.Item label="Tuesday" value="Tuesday"/>
          <Picker.Item label="Wednesday" value="Wednesday"/>
          <Picker.Item label="Thursday" value="Thursday"/>
          <Picker.Item label="Friday" value="Friday"/>
          <Picker.Item label="Saturday" value="Saturday"/>
          <Picker.Item label="Sunday" value="Sunday"/>          
        </Picker>
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    flex: 1,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center'
  },
  labelStyle: {
    flex: 1,
    paddingLeft: 25,
    fontSize: 18
  },
  pickerStyle: {
    flex: 2,
    fontSize: 18,
    paddingRight: 5
  }
};

export { DayPicker };