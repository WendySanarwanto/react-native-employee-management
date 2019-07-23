import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';

import { Button, CardSection, Spinner } from '../components/common';
import EmployeeForm from './EmployeeForm';
import { employeeUpdate } from '../actions/EmployeeActions';

class EmployeeEdit extends Component {
  componentDidMount() {
    const {employee, employeeUpdate} = this.props;
    // console.log(`[DEBUG]<EmployeeEdit.componentDidMount()> employee: \n`, employee);
    if (employee) {
      const empEntries = Object.entries(employee);
      // console.log(`[DEBUG]<EmployeeEdit.componentDidMount()> empEntries: \n`, empEntries);
      empEntries.forEach(keyvaluePairs => employeeUpdate({ prop: keyvaluePairs[0], value: keyvaluePairs[1] }));
    }    
  }

  onSaveButtonClicked = () => {
    const { id, name, phone, shift } = this.props;
    console.log(`[DEBUG]<EmployeeEdit.onSaveButtonClicked()> id: ${id}, name: ${name}, phone: ${phone}, shift: ${shift}`);
  //   employeeCreate({ name, phone, shift: shift || 'Monday' });
  }

  onDeleteButtonClicked = () => {
    const { id, name, phone, shift } = this.props;
    console.log(`[DEBUG]<EmployeeEdit.onDeleteButtonClicked()> id: ${id}, name: ${name}, phone: ${phone}, shift: ${shift}`);
  }

  renderButtonsOrSpinner = () => {
    const { saving } = this.props;
    if (saving) {
      return <Spinner />
    }

    return (
      <View>
        <CardSection>
          <Button label="Save" onClicked={ this.onSaveButtonClicked } />
        </CardSection>
        <CardSection>
          <Button label="Delete" onClicked={ this.onDeleteButtonClicked } />
        </CardSection>
      </View>
    );
  }

  render(){    
    // const { name, phone, shift, employeeUpdate } = this.props;
    // console.log(`[DEBUG]<EmployeeCreate.render()> name: ${name}, phone: ${phone}, shift: ${shift}`);
    return (
      <EmployeeForm {...this.props}>
        { this.renderButtonsOrSpinner() }
      </EmployeeForm>
    );
  }
};

function mapStateToProps( state ) {  
  const { id, name, phone, shift, saving, error } = state.employeeForm;
  // console.log(`[DEBUG]<EmployeeCreate.mapStateToProps()> name: ${name}, phone: ${phone}, shift: ${shift}`);
  return {
    id,
    name,
    phone,
    shift,
    saving,
    error,
  };
}

export default connect(
  mapStateToProps, { employeeUpdate }
)(EmployeeEdit);