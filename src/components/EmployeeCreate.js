import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';

import { Input, Button, Card, CardSection, DayPicker, Spinner } from '../components/common';
import { employeeCreate, employeeUpdate } from '../actions/EmployeeActions';

class EmployeeCreate extends Component {
  onSaveButtonClicked = () => {
    const { name, phone, shift, employeeCreate } = this.props;
    // console.log(`[DEBUG]<EmployeeCreate.onSaveButtonClicked()> name: ${name}, phone: ${phone}, shift: ${shift}`);
    employeeCreate({ name, phone, shift: shift || 'Monday' });
  }

  renderButtonOrSpinner = () => {
    const { saving } = this.props;
    if (saving) {
      return <Spinner />
    }

    return <Button label="Save" onClicked={ this.onSaveButtonClicked } />
  }

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
        { this.renderError() }
        <CardSection>
          { this.renderButtonOrSpinner() }
        </CardSection>
      </Card>
    );
  }
};

function mapStateToProps( state ) {  
  const { name, phone, shift, saving, error } = state.employeeForm;
  // console.log(`[DEBUG]<EmployeeCreate.mapStateToProps()> name: ${name}, phone: ${phone}, shift: ${shift}`);
  return {
    name,
    phone,
    shift,
    saving,
    error,
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

export default connect(
  mapStateToProps, { 
    employeeCreate, 
    employeeUpdate 
  }
)(EmployeeCreate);