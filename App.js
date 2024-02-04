import HomeScreen from './HomeScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HealthyScreen from './HealthyScreen';
import AboutScreen from './AboutScreen';

function App(){
  const Stack = createNativeStackNavigator();

  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={HomeScreen} options={{title: 'BMI Calculator'}}/>
        <Stack.Screen name='Healthy' component={HealthyScreen} options={{title: 'Healthy'}}/>
        <Stack.Screen name='About' component={AboutScreen} options={{title: 'About'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
