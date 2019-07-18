import React, { Component } from 'react';

import { Card, CardSection, Input, Button } from './common';

class LoginForm extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <Input label="Email" placeholder="e.g. john.smith@gmail.com" />
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

export default LoginForm;
