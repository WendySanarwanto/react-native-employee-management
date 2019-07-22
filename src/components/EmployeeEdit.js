import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Button, CardSection, Spinner } from '../components/common';
import EmployeeForm from './EmployeeForm';

class EmployeeEdit extends Component {
  onSaveButtonClicked = () => {
  //   const { name, phone, shift, employeeCreate } = this.props;
    console.log(`[DEBUG]<EmployeeEdit.onSaveButtonClicked()> name: ${name}, phone: ${phone}, shift: ${shift}`);
  //   employeeCreate({ name, phone, shift: shift || 'Monday' });
  }

  onDeleteButtonClicked = () => {
    console.log(`[DEBUG]<EmployeeEdit.onDeleteButtonClicked()> name: ${name}, phone: ${phone}, shift: ${shift}`);
  }

  renderButtonsOrSpinner = () => {
    const { saving } = this.props;
    if (saving) {
      return <Spinner />
    }

    return (
      <CardSection>
        <Button label="Save" onClicked={ this.onSaveButtonClicked } />
        <Button label="Delete" onClicked={ this.onDeleteButtonClicked } />
      </CardSection>
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

export default connect(
  mapStateToProps, {}
)(EmployeeEdit);