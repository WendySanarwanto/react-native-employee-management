import React, { Component } from 'react';
import { Picker } from 'react-native';
import { Input, Button, Card, CardSection } from '../components/common';
import { connect } from 'react-redux';

import { employeeUpdate } from '../actions/EmployeeActions';

class EmployeeCreate extends Component {
  render(){    
    const { name, phone, shift, employeeUpdate } = this.props;
    // console.log(`[DEBUG]<EmployeeCreate.render()> name: ${name}, phone: ${phone}, shift: ${shift}`);

    return (
      <Card>
        <CardSection>
          <Input 
            label="Name" 
            placeHolder="Jane" 
            value={ name }
            onChangeText={ text => employeeUpdate({ prop: 'name', value: text }) } />
        </CardSection>

        <CardSection>
          <Input 
            label="Phone" 
            placeHolder="555-555-5555" 
            value={ phone }
            onChangeText={ text => employeeUpdate({ prop: 'phone', value: text }) }/>
        </CardSection>

        <CardSection>
          <Picker 
            style={{ flex:1 }}
            selectedValue={ shift } 
            onValueChange={ value => employeeUpdate({ prop: 'shift', value }) }>
            <Picker.Item label="Monday" value="Monday"/>
            <Picker.Item label="Tuesday" value="Tuesday"/>
            <Picker.Item label="Wednesday" value="Wednesday"/>
            <Picker.Item label="Thursday" value="Thursday"/>
            <Picker.Item label="Friday" value="Friday"/>
            <Picker.Item label="Saturday" value="Saturday"/>
            <Picker.Item label="Sunday" value="Sunday"/>
          </Picker>
        </CardSection>

        <CardSection>
          <Button label="Save"  />
        </CardSection>
      </Card>
    );
  }
};

function mapStateToProps( state ) {  
  const { name, phone, shift } = state.employeeForm;
  // console.log(`[DEBUG]<EmployeeCreate.mapStateToProps()> name: ${name}, phone: ${phone}, shift: ${shift}`);
  return {
    name,
    phone,
    shift,
  };
}

export default connect(mapStateToProps, { employeeUpdate })(EmployeeCreate);