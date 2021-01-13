import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import{createStackNavigator} from '@react-navigation/stack';
import Main from './pages/Main';
import User from './pages/User';
const Stack = createStackNavigator();

if (__DEV__) {
  require('react-devtools');
}
const Routes = ()=>{
  return(<>
  <NavigationContainer>
    <Stack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: '#FB2',
        },
        headerTitleAlign: 'center',
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen  name="Main" component={Main} options={{title:'Usuários'}}/>
      <Stack.Screen  name="User" component={User} options={({ route }) => ({ title: route.params.user.name,})}/>
    </Stack.Navigator>
  </NavigationContainer>
  </>);
}
export default Routes;
