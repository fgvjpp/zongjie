import * as React from 'react';
import {Button, StyleSheet, View} from 'react-native';

function About2({navigation}: any) {
  return (
    <View style={styles.root}>
      <Button
        title="点击跳转Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});

export default About2;
