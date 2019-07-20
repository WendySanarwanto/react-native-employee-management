import React from 'react';
import { Scene, Router } from 'react-native-router-flux';

import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar>
        <Scene key="auth">
          <Scene key="login" component={ LoginForm } title="Please Login" initial />
        </Scene>
        <Scene key="main">
          <Scene
            rightTitle="Add"
            onRight={() => console.log(`[DEBUG] Add Employee button is clicked.`)}
            key="employeeList" 
            component={ EmployeeList } 
            title="Employees" />
        </Scene>
      </Scene>
    </Router>
  );
}

export default RouterComponent;
