import React, { Component } from 'react';
import { Input, Button, Card, CardSection } from '../components/common';
import { connect } from 'react-redux';

import { employeeUpdate } from '../actions/EmployeeActions';

class EmployeeCreate extends Component {
  render(){
    return (
      <Card>
        <CardSection>
          <Input 
            label="Name" 
            placeHolder="Jane" 
            value={ this.props.name }
            onChangeText={ name => this.props.employeeUpdate({ prop: 'name', value: name }) } />
        </CardSection>

        <CardSection>
          <Input 
            label="Phone" 
            placeHolder="555-555-5555" 
            value={ this.props.phone }
            onChangeText={ phone => this.props.employeeUpdate({ prop: 'phone', value: phone }) }/>
        </CardSection>

        <CardSection>

        </CardSection>

        <CardSection>
          <Button label="Save"  />
        </CardSection>
      </Card>
    );
  }
};

function mapStateToProps({ name, phone, shift }) {
  return {
    name,
    phone,
    shift,
  };
}

export default connect(mapStateToProps, { employeeUpdate })(EmployeeCreate);