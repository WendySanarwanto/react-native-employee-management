import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';

import { Card, CardSection, DayPicker, Input } from '../components/common';
import { employeeUpdate } from '../actions/EmployeeActions';

class EmployeeForm extends Component {
  renderError = () => {
    if (this.props.error){
      return (
        <View style={{ backgroundColor: 'white' }}>
          <Text style={ styles.errorTextStyle }>
            { this.props.error }
          </Text>
        </View>
      );
    }
  }

  render() {
    const { name, phone, shift, employeeUpdate } = this.props;
    return(
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
        { this.renderError() }
        { this.props.children }
      </Card>      
    );
  };
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red',
    padding: 10
  }
}

function mapStateToProps( state ) {  
  const { name, phone, shift, error } = state.employeeForm;
  console.log(`[DEBUG]<EmployeeForm.mapStateToProps()> name: ${name}, phone: ${phone}, shift: ${shift}`);
  return {
    name,
    phone,
    shift,
    error,
  };
}

export default connect(mapStateToProps, {employeeUpdate})(EmployeeForm);