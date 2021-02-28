import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigation from './src/navigation/mainavigation';

class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <MainNavigation />
      </NavigationContainer>
    )
  }
}

export default App;