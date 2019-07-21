import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Input, Button, Card, CardSection, DayPicker } from '../components/common';
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
          <DayPicker 
            style={{ flex:1 }}
            value={ shift }
            label="Shift"
            onValueChanged={ value => employeeUpdate({ prop: 'shift', value }) }
          />
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