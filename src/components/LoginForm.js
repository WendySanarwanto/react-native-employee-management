import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

import { Card, CardSection, Input, Button, Spinner } from './common';
import { emailChanged, loginUser, passwordChanged } from '../actions';

class LoginForm extends Component {
  renderButtonOrSpinner() {
    if (this.props.loading) {
      return <Spinner />
    }
    return <Button label="Login" onClicked={ _ => this.props.loginUser(this.props) }/>;
  }

  renderError() {
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
        { this.renderError() }
        <CardSection>
          { this.renderButtonOrSpinner() }
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red',
    padding: 10
  }
}

function mapStateToProps(state){
  return {
    email: state.auth.email,
    password: state.auth.password,
    // error: state.auth.error.message
    error: state.auth.error,
    loading: state.auth.loading
  }
}

export default connect(
  mapStateToProps,
  {
    emailChanged,
    loginUser,
    passwordChanged,
  }
)(LoginForm);
