import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import Communications from 'react-native-communications';

import { Button, CardSection, ConfirmDialog, Spinner } from '../components/common';
import EmployeeForm from './EmployeeForm';
import { employeeUpdate, employeeSave, employeeDelete } from '../actions/EmployeeActions';

class EmployeeEdit extends Component {
  state = { showConfirmDialog: false };
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
    // console.log(`[DEBUG]<EmployeeEdit.onSaveButtonClicked()> id: ${id}, name: ${name}, phone: ${phone}, shift: ${shift}`);
    this.props.employeeSave({ id, name, phone, shift });
  }

  onTextScheduleButtonClicked = () => {
    const { phone, shift } = this.props;
    Communications.text(phone, `Your upcoming shift is on ${shift}.`);
  }

  onFireEmployeeButtonClicked = () => {
    this.setState({ showConfirmDialog: !this.state.showConfirmDialog })
  }

  onConfirmFireEmployee = () => {
    const { id, employeeDelete } = this.props;
    this.setState({ showConfirmDialog: false });
    employeeDelete({ id });
  }

  renderButtonsOrSpinner = () => {
    const { saving } = this.props;
    if (saving) {
      return (
        <View>
          <CardSection>
            <Spinner />
          </CardSection>
        </View>
      );
    }

    return (
      <View>
        <CardSection>
          <Button label="Save Changes" onClicked={ this.onSaveButtonClicked } />
        </CardSection>
        <CardSection>
          <Button label="Text Schedule" onClicked={ this.onTextScheduleButtonClicked } />
        </CardSection>
        <CardSection>
          <Button label="Fire" onClicked={ this.onFireEmployeeButtonClicked } />
        </CardSection>

        <ConfirmDialog 
          visible={this.state.showConfirmDialog} 
          onDecline={ ()=> this.setState({ showConfirmDialog: false }) }
          onAccept={ this.onConfirmFireEmployee }>
          Are you sure you want to delete this employee ?
        </ConfirmDialog>
      </View>
    );
  }

  render(){    
    // const { name, phone, shift, employeeUpdate } = this.props;
    // console.log(`[DEBUG]<EmployeeCreate.render()> name: ${name}, phone: ${phone}, shift: ${shift}`);
    return (
      <EmployeeForm>
        { this.renderButtonsOrSpinner() }
      </EmployeeForm>
    );
  }
};

function mapStateToProps( state ) {  
  const { id, name, phone, shift, saving, } = state.employeeForm;
  // console.log(`[DEBUG]<EmployeeCreate.mapStateToProps()> name: ${name}, phone: ${phone}, shift: ${shift}`);
  return {
    id,
    name,
    phone,
    shift,
    saving,
  };
}

export default connect(
  mapStateToProps, { employeeSave, employeeUpdate, employeeDelete }
)(EmployeeEdit);