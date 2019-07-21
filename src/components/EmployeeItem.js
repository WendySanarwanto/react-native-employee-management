import React, { Component } from 'react';
import { Card, CardSection, LabelField } from './common';

class EmployeeItem extends Component {
  render() {
    const { name, phone, shift } = this.props.Item;
    return (
      <Card>
        <CardSection style={{ padding: 0 }}>
          <LabelField value={ name } hideLabel
            viewStyle={ { backgroundColor: '#1a73e8' } } 
            textStyle={ { color: '#ffffff', paddingLeft: 20 } }/>
        </CardSection>
        
        <CardSection style={{flexDirection: 'column'}}>
          <LabelField name="Phone" value={ phone } />
          <LabelField name="Shift" value={ shift } />
        </CardSection>        
      </Card>
    );
  }
}

export default EmployeeItem;