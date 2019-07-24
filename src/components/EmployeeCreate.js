import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Button, CardSection, Spinner } from '../components/common';
import { employeeCreate, employeeReset } from '../actions/EmployeeActions';

import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {
  componentDidMount() {
    const {employeeReset} = this.props;
    employeeReset();
  }

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

  render(){    
    return (
      <EmployeeForm {...this.props}>
        <CardSection>
          { this.renderButtonOrSpinner() }
        </CardSection>        
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
  mapStateToProps, { 
    employeeCreate, 
    employeeReset
  }
)(EmployeeCreate);