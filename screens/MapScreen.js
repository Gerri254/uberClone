import React from 'react';
import { View } from 'react-native';
import Map from '../components/Map';
import { createStackNavigator } from '@react-navigation/stack';
import NavigateCard from '../components/NavigateCard';
import RideOptionsCard from '../components/RideOptionsCard';

const MapScreen = () => {
  const Stack = createStackNavigator();

  return (
    <View>
      <View style={{ height: '50%' }}>
        <Map />
      </View>
      <View style={{ height: '50%' }}>
        <Stack.Navigator>
          <Stack.Screen
            name="NavigateCard"
            component={NavigateCard}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="RideOptionsCard"
            component={RideOptionsCard}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </View>
    </View>
  );
};

export default MapScreen;
