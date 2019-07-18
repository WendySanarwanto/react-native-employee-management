import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Card, CardSection, Input, Button } from './common';
import { emailChanged } from '../actions';

class LoginForm extends Component {
  // state = { email: null, password: null };
  onEmailChange(text) {
    // const email = e.target.value;
    // debugger;
    // console.log(`[DEBUG]<onEmailChange> text: ${text}`);
    emailChanged(text);
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="e.g. john.smith@gmail.com"
            onChangeText={this.onEmailChange.bind(this)}
          />
        </CardSection>
        <CardSection>
          <Input secureTextEntry label="Password" placeHolder="password" />
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
  }
)(LoginForm);
