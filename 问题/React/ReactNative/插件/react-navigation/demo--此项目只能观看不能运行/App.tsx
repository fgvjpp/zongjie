import * as React from 'react';
import {View} from 'react-native';
import Router from './src/routes/router';

export default function App() {
  return (
    <View style={{flex: 1}}>
      <Router />
    </View>
  );
}
