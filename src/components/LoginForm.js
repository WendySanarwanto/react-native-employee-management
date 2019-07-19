import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Card, CardSection, Input, Button } from './common';
import { emailChanged, passwordChanged } from '../actions';

class LoginForm extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="e.g. john.smith@gmail.com"
            onChangeText={ text => this.props.emailChanged(text) }
          />
        </CardSection>
        <CardSection>
          <Input secureTextEntry 
            label="Password" 
            placeHolder="password" settin
            onChangeText={ text => this.props.passwordChanged(text) }/>
        </CardSection>
        <CardSection>
          <Button label="Login" />
        </CardSection>
      </Card>
    );
  }
}

export default connect(
  null,
  {
    emailChanged,
    passwordChanged,
  }
)(LoginForm);
