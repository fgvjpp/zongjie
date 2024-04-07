import * as React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

export default function Test({navigation}: any) {
  return (
    <View style={styles.root}>
      <Text>Test Screen</Text>
      <Button
        title="点击跳转About"
        onPress={() => navigation.navigate('About')}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  root: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});
