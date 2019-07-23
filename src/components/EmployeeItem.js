import React, { Component } from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';
import { Card, CardSection, LabelField } from './common';
import { Actions } from 'react-native-router-flux';

class EmployeeItem extends Component {
  onTapped = (employeeItem) => {
    const { onRowPress } = this.props;
    if (onRowPress) {
      onRowPress(employeeItem);
    }
  }

  render() {
    const { name, phone, shift } = this.props.Item;
    return (
      <TouchableWithoutFeedback onPress={() => this.onTapped(this.props.Item)}>
        <View>
          <Card>
            <CardSection style={{ padding: 0 }}>
              <LabelField
                value={name}
                hideLabel
                viewStyle={{ backgroundColor: "#1a73e8" }}
                textStyle={{ color: "#ffffff", paddingLeft: 20 }}
              />
            </CardSection>
            <CardSection style={{ flexDirection: "column" }}>
              <LabelField name="Phone" value={phone} />
              <LabelField name="Shift" value={shift} />
            </CardSection>
          </Card>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default EmployeeItem;