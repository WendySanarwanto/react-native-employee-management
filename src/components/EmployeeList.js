import React, { Component } from 'react';
import { FlatList, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import { Button, Card, CardSection, Spinner } from '../components/common';
import EmployeeItem from './EmployeeItem';
import { employeesFetch } from '../actions/EmployeeActions';

class EmployeeList extends Component {
  componentDidMount() {
    this.props.employeesFetch();
  }

  onEmployeeTapped = employee => {
    // console.log(`[DEBUG]<onEmployeeTapped> employee: \n`, employee);
    Actions.employeeEdit({employee});
  }

  keyExtractor = item => item.id.toString();

  renderItem = ({ item }) => {
    if (!item) {
      return null;
    }

    return <EmployeeItem onRowPress={ this.onEmployeeTapped } Item={ item } />
  }

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
        <FlatList 
          data={ employees }
          keyExtractor={ this.keyExtractor }
          renderItem={ this.renderItem }
        />
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
