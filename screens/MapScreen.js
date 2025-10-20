import React from 'react';
import { View } from 'react-native';
import Map from '../components/Map';
import NavigateCard from '../components/NavigateCard';
import RideOptionsCard from '../components/RideOptionsCard';

const MapScreen = () => {
  return (
    <View>
      <Map />
      <NavigateCard />
      <RideOptionsCard />
    </View>
  );
};

export default MapScreen;
