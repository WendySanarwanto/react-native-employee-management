import React, { Component } from 'react';
import { Card, CardSection, LabelField } from './common';

class EmployeeItem extends Component {
  render() {
    const { name, phone, shift } = this.props.Item;
    return (
      <Card>
        <CardSection>
          <LabelField name="Name" value={ name } />
        </CardSection>
        
        <CardSection>
          <LabelField name="Phone" value={ phone } />
        </CardSection>

        <CardSection>
          <LabelField name="Shift" value={ shift } />
        </CardSection>        
      </Card>
    );
  }
}

export default EmployeeItem;