import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import{createStackNavigator} from '@react-navigation/stack';
import Main from './pages/Main';
import User from './pages/User';
const Stack = createStackNavigator();
const Routes = ()=>{
  return(<>
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen  name="Main" component={Main} options={{title:'Principal'}}/>
      <Stack.Screen  name="User" component={User}/>
    </Stack.Navigator>
  </NavigationContainer>
  </>);
}
export default Routes;
