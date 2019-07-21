import React, { Component, Fragment } from 'react';
import { FlatList, Text, View } from 'react-native';
import { connect } from 'react-redux';

import { Button, Card, CardSection, Spinner } from '../components/common';
import { employeesFetch } from '../actions/EmployeeActions';

class EmployeeList extends Component {
  componentDidMount() {
    this.props.employeesFetch();
  }

  keyExtractor = item => item.id.toString();

  renderErrorRefreshButton = error => {
    if (error) {
      return (
        <CardSection style={{ flexDirection: 'column', height: 100 }}>
          <View style={{ backgroundColor: 'white' }}>
            <Text style={ styles.errorTextStyle }>{ error }</Text>
          </View>
          <CardSection>
            <Button label="Save" onClicked={ this.onSaveButtonClicked } />
          </CardSection>
        </CardSection>
      );
    }
  }

  renderEmployeesList = (loading, employees) => {
    if (loading) return (
      <CardSection style={{ flexDirection: 'column', height: 100 }}>
        <Spinner />
        <Text style={ styles.loadingTextStyle }>Loading ...</Text>
      </CardSection>
    );

    return (
      <CardSection style={{ flexDirection: 'column' }}>
        <Text>Employee #1</Text>
        <Text>Employee #2</Text>
        <Text>Employee #3</Text>
        <Text>Employee #4</Text>
        <Text>Employee #5</Text>
        <Text>Employee #6</Text>
        <Text>Employee #7</Text>
      </CardSection>
    );
  }

  render() {
    const { error, loading, employees } = this.props;
    
    return (
      <Card>
        { this.renderErrorRefreshButton(error) }
        { this.renderEmployeesList(loading, employees) }
      </Card>
    );
  }
};

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red',
    padding: 10
  },
  loadingTextStyle: {
    fontSize: 18,
    alignSelf: 'center',
    paddingTop: 5
  }
}

function mapStateToProps(state){
  const { error, loading, data } = state.employees;
  return {
    employees: data,
    error, 
    loading,
  };
}

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);
